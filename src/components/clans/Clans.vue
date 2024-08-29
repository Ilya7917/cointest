<script lang="ts" setup>
import { useWebAppNavigation } from 'vue-tg'
import { onMounted, ref } from "vue";
import { useWebAppPopup } from 'vue-tg'
import { useI18n } from 'vue-i18n';
import AddIcon from "@/assets/images/addIcon.svg";
import { useUserStore } from '@/store/user';
import { newClanResponse, Clan, ClanMember, useClansStore } from '@/store/clan';
import { useMarketStore } from '@/store/marketstore'

import NavMenu from './NavMenu.vue';

import ClanItem from './ClanItem.vue';
import ClanData from './ClanData.vue';

const { t } = useI18n();

const wn = useWebAppNavigation();
const isPopupVisible = ref(false);
const popupVisibleState = ref('member')
const subPopupState = ref('view');
const isCanView = ref(false);

const userStore     = useUserStore();
const clansStore    = useClansStore();
const marketStore = useMarketStore();

const myUserId = ref(0);

const userHasClan = ref(false);
const myClan = ref<Clan | null>(null);


const fetchFunction = () => {
    clansStore.getClans().then(() => {
        if(userStore.user?.clan_id != null) {
          myClan.value = clansStore.clans != null ? clansStore.clans[clansStore.clans?.findIndex(x => x.ID == userStore.user?.clan_id)] : null;
          userHasClan.value = true 
        }else {
          if(clansStore.clans?.findIndex(x => x.OwnerID == myUserId.value) != -1) {
              userHasClan.value = true 
          }
        }

        isCanView.value = true;
    });
}

onMounted(() => {
  fetchFunction();
  if(userStore.user?.id != undefined){ 
   myUserId.value = userStore.user?.id
  }
});

const pageState = ref('clans')
const progressPost = ref(0);

const changePageState = (state: string, clan?: Clan) => { 
  pageState.value = state;

  if(clan != null) selectedClan.value = clan;

}

const isNextButton = ref(true);
const progressNewPosts = [
    {
        id: 0,
        isActive: true,
        text: "Add name"
    },
    {
        id: 1,
        isActive: false,
        text: "Add avatar"
    },
    {
        id: 2,
        isActive: false,
        text: "Description"
    }
]

const nextButtonChangeState = () => {
    switch(progressPost.value){
        case 0:
            if (newClan.value.name.trim() === '') {
                useWebAppPopup().showAlert("❌ Название канала не может быть пустым ❌")
                return;
            } 
            break;
    }

    progressPost.value++;
    progressNewPosts[progressPost.value].isActive = true;
}

const newClan = ref<newClanResponse>({
    name: '',
    image: null as File | null,
    description: '',
})
const needUpdate = ref(false);
const selectedClan = ref<Clan | null>(null);

const onAddFile = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                const MAX_WIDTH = 1024;
                const MAX_HEIGHT = 1024;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                if(ctx != null) ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    if (blob) {
                        newClan.value.image = new File([blob], file.name, { type: file.type });
                        isNextButton.value = true;
                    }
                }, file.type, 0.8);
            };
            img.src = event.target?.result as string;
        };

        reader.readAsDataURL(file);
    }
}

const createNewClan = () => {
    // if(!userStore.user) return;

    clansStore.createClan(newClan.value).then(ok => {
        console.log(ok);
        if(ok) {
            pageState.value = 'clans';
            fetchFunction();
        }
    })
}

const selectedClanMember = ref<ClanMember | any>(null)

const onOpenUserData = (type: string, member: ClanMember | any) => {
  isPopupVisible.value = true;
  popupVisibleState.value = type;
  selectedClanMember.value = member;
  subPopupState.value = 'view';
}


const onAcceptUserToClan = () => {
  clansStore.acceptUserToClan(selectedClanMember.value.ClanID, selectedClanMember.value.UserID).then(ok => {
    if(ok) {
      let clanIndex = clansStore.clans?.findIndex(x => x.ID == selectedClanMember.value.ClanID);
      if(clansStore.clans != null) clansStore.clans[clanIndex != undefined ? clanIndex : -1].MemberCount ++; 
      isPopupVisible.value = false;
      needUpdate.value = !needUpdate.value;
    }
  })
}

const onDeclineUserToClan = () => {
  clansStore.declineUserToClan(selectedClanMember.value.ClanID, selectedClanMember.value.UserID).then(ok => {
    if(ok) {
      isPopupVisible.value = false;
      needUpdate.value = !needUpdate.value;
    }
  })
}


const onRemoveUserFromClan = () => {
  clansStore.removeUserFrom(selectedClanMember.value.ClanID, selectedClanMember.value.UserID).then(ok => {
    if(ok) {
      let clanIndex = clansStore.clans?.findIndex(x => x.ID == selectedClanMember.value.ClanID);
      if(clansStore.clans != null) clansStore.clans[clanIndex != undefined ? clanIndex : -1].MemberCount --;
      isPopupVisible.value = false;
      needUpdate.value = !needUpdate.value;
      subPopupState.value = 'view';
    }
  })
}

const onChangeMemberRole = (role: string) => {
  clansStore.changeUserRole(selectedClanMember.value.ClanID, selectedClanMember.value.UserID, role).then(ok => {
    if(ok) {
      isPopupVisible.value = false;
      needUpdate.value = !needUpdate.value;
      subPopupState.value = 'view';
    }
  })
}

const leaveClan = (clanID: number) => {
  clansStore.leaveClan(clanID).then(ok => {
    if(ok) {
      fetchFunction();
      pageState.value = 'clans';
      needUpdate.value = !needUpdate.value;
    }
  })
}

</script>

<template>

  <div class="telegram-channels">
    <div v-if="isCanView">
        <NavMenu :page-state="pageState" @change-page-state="changePageState" :hasClan="userHasClan" />
    </div>
    <div v-if="pageState === 'create'" class="createPostMenu" :style="{ marginTop:'15px' }">
        <div :style="{ marginTop:'20px' }">
            <ul id="progressbar">
                <li v-for="item in progressNewPosts" :class="item.isActive ? 'active' : ''">{{  item.text }}</li>
            </ul>
        </div>
        <div class="createForm">
            <div v-if="progressPost === 0" :style="{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }">
              <label for="fname" >Название клана</label>
              <input type="text" id="fname" :style="{ width: '70%', color:'white'}" name="fname" v-model="newClan.name">
            </div>
            <div v-if="progressPost === 1" :style="{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }">
              <label for="fname" :style="{ fontSize:'18px' }">Аватар клана (Не обязательно)</label>
              <input class="addFile" type="file" @change="onAddFile" :style="{ marginTop:'30px' }">
            </div>
            <div v-if="progressPost === 2" :style="{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }">
                <label for="fname" >Описание клана (Не обязательно)</label>
                <input type="text" id="fname" :style="{ width: '70%', color:'white' }" name="fname" v-model="newClan.description">
                <div v-if='isNextButton'>
                    <button class="mypost-button" :style="{ marginTop: '30px' }" @click="createNewClan()">Создать</button>
                </div>
            </div>

            
        </div>
        <div v-if="progressPost < 2" :style="{ display:'flex', justifyContent:'center' }">
            <button class="mypost-button" :style="{ marginTop: '30px' }" @click="nextButtonChangeState">Дальше</button>
        </div>
    </div>

    <div v-if="pageState == 'clans'" :style="{ display:'flex', flexDirection:'column', justifyContent:'space-between' }">
        <div :style="{ height:'100%' }">
          <div v-if="isCanView" class="channels-list">
              <ClanItem :changePageState="changePageState" :clans="clansStore.clans != null ? clansStore.clans : []" :myUserId="myUserId" :isPopupVisible="isPopupVisible"  />
          </div>
        </div>
    </div>

    <div v-if="pageState == 'claninfo'">
        <ClanData :clan="selectedClan != null ? selectedClan : new Object()" :myUserId="myUserId" :clansStore="clansStore" :onOpenUserData="onOpenUserData" :needUpdate="needUpdate" :myClan="myClan != null ? myClan : new Object()" :leaveClan="leaveClan" />
    </div>


    <div v-if="pageState == 'myClan' && myClan != null">
        <ClanData :clan="myClan != null ? myClan : new Object()" :myUserId="myUserId" :clansStore="clansStore" :onOpenUserData="onOpenUserData" :needUpdate="needUpdate" :myClan="myClan != null ? myClan : new Object()" :leaveClan="leaveClan" />
    </div>


    <div v-if="isPopupVisible" class="boost-purchase-popup" :class="{ 'visible': isPopupVisible }">
        <div v-if="popupVisibleState == 'invite'" class="popup-content">
            <div class="popup-header">
                <span>Пользователь {{ selectedClanMember.UserName }} хочет вступить к вам в клан</span>
                <button class="close-button" @click="isPopupVisible = false;">
                  <svg class="close-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="16px" height="16px">
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
                  </svg>
                </button>
            </div>
            <div :style="{ display:'flex', justifyContent:'center', marginTop:'20px' }">
              <button class="boost-purchase-button" :style="{ width:'60%' }" @click="onAcceptUserToClan()">Принять</button>
            </div>
            <div :style="{ display:'flex', justifyContent:'center', marginTop:'20px' }">
              <button class="boost-purchase-button" :style="{ width:'60%' }" @click="onDeclineUserToClan()">Отклонить</button>
            </div>
        </div>

        <div v-if="popupVisibleState == 'memberData'" class="popup-content">
            <div class="popup-header">
                <span>Пользователь {{ selectedClanMember.UserName }} состоит в вашем клане</span>
                <button class="close-button" @click="isPopupVisible = false;">
                  <svg class="close-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="16px" height="16px">
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
                  </svg>
                </button>
            </div>
            <span>Роль: {{  selectedClanMember.Role  }}</span>
            <div v-if="subPopupState == 'view'">
              <div :style="{ display:'flex', justifyContent:'center', marginTop:'20px' }">
                <button class="boost-purchase-button" :style="{ width:'60%' }" @click="subPopupState = 'edit'">Изменить роль</button>
              </div>
              <div :style="{ display:'flex', justifyContent:'center', marginTop:'20px' }">
                <button class="boost-purchase-button" :style="{ width:'60%' }" @click="onRemoveUserFromClan()">Выгнать</button>
              </div>
            </div>
            <div v-else>
              <div :style="{ display:'flex', justifyContent:'center', marginTop:'20px' }">
                <button class="boost-purchase-button" :style="{ width:'60%' }" @click="onChangeMemberRole('заместитель')">Сделать заместителем</button>
              </div>
              <div :style="{ display:'flex', justifyContent:'center', marginTop:'20px' }">
                <button class="boost-purchase-button" :style="{ width:'60%' }" @click="onChangeMemberRole('участник')">Сделать участником</button>
              </div>
              <div :style="{ display:'flex', justifyContent:'center', marginTop:'20px' }">
                <button class="boost-purchase-button" :style="{ width:'60%' }" @click="subPopupState = 'view'">Назад</button>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

input[type="file"]::file-selector-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

input[type=text] {
  width: 150%;
  padding: 12px 20px;
  margin: 30px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid;
  background: none;
}

input:focus {
  outline: none; /* Убирает стандартную синюю обводку */
  border: 1px solid #ccc; /* Устанавливает желаемую обводку, если нужно */
}

input[type="number"] {
  color: white; 
  text-align: right;
}


input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


input[type="number"] {
  -moz-appearance: textfield;
}

.mypost-button {
    padding: 10px 20px;
    border: none;
    background-color: #878787;
    color: white;
    width: 170px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
}

input[type=number] {
  width: 40%;
  padding: 12px 20px;
  margin: 30px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid;
  background: none;
}

.telegram-channels {
    overflow-y: hidden;
    background: #010300a3;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(5px);
}

.earn-title {
  margin: 25px 10px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.channels-title {
  margin: 10px;
  font-size: 24px;
  font-weight: bolder;
}

.channel-info {
  display: flex;
  flex-direction: column;
  /* font-size: 18px; */
}

.channel-action {
  display: flex;
  align-items: center;
}

.name,
.description,
.reward {
  margin-right: 15px;
}

.button {
  padding: 10px 10px;
  background: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
}

.boost-purchase-popup {
  transform: translateY(100%); /* Start off the bottom of the screen */
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Align the modal at the bottom */
  z-index: 1000;
  transition: transform 0.2s ease; /* Smooth transition for the transform property */
  color: white;
}

.boost-purchase-popup.visible {
  transform: translateY(0); /* Position it inside the viewport */
}

.popup-content {
  position: relative;
  background: rgba(256,256,256,.15);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(300px);
  border-radius: 10px 10px 0 0; /* Тільки верхні кути округлені */
  z-index: 1001;
  padding: 20px 20px 45px;
  width: 100%;
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.5);
}

.popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 24px;
    color: white;
}

.popup-body h3,
.popup-body p {
    margin: 10px 0;
}

.boost-purchase-button {
    padding: 10px 20px;
    border: none;
    background-color: #2c2c2c;
    color: white;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
}

.boost-desc-hint {
    color: #c5c5c5;
    font-size: 14px;
}

.price-hint {
    color: #aeaeae;
    margin-left: 5px;
    font-size: 12px;
}


/*progressbar*/
#progressbar {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  /*CSS counters to number the steps*/
  counter-reset: step;
  text-align: center;
}
#progressbar li {
  list-style-type: none;
  color: white;
  text-transform: uppercase;
  font-size: 9px;
  width: 33.33%;
  float: left;
  position: relative;
}
#progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 20px;
  line-height: 20px;
  display: block;
  font-size: 10px;
  color: #333;
  background: white;
  border-radius: 3px;
  margin: 0 auto 5px auto;
}
/*progressbar connectors*/
#progressbar li:after {
  content: '';
  width: 100%;
  height: 2px;
  background: white;
  position: absolute;
  left: -50%;
  top: 9px;
  z-index: -1; /*put it behind the numbers*/
}
#progressbar li:first-child:after {
  /*connector not needed before the first step*/
  content: none; 
}
/*marking active/completed steps green*/
/*The number of the step and the connector before it = green*/
#progressbar li.active:before,  #progressbar li.active:after{
  background: #27AE60;
  color: white;
}


.sec-center {
  position: relative;
  max-width: 100%;
  text-align: center;
  z-index: 200;
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
}
.dark-light:checked + label,
.dark-light:not(:checked) + label{
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 20000;
  display: block;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  cursor: pointer;
  transition: all 200ms linear;
  box-shadow: 0 0 25px rgba(255,235,167,.45);
}
.dark-light:checked + label{
  transform: rotate(360deg);
}
.dark-light:checked + label:after,
.dark-light:not(:checked) + label:after{
  position: absolute;
  content: '';
  top: 1px;
  left: 1px;
  overflow: hidden;
  z-index: 2;
  display: block;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: #102770;
  background-image: url('https://assets.codepen.io/1462889/moon.svg');
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 200ms linear;
  opacity: 0;
}
.dark-light:checked + label:after {
  opacity: 1;
}
.dark-light:checked + label:before,
.dark-light:not(:checked) + label:before{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
  display: block;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  background-color: #48dbfb;
  background-image: url('https://assets.codepen.io/1462889/sun.svg');
  background-size: 25px 25px;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 200ms linear;
}
.dark-light:checked + label:before{
  background-color: #000;
}
.light-back{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
  overflow: hidden;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg');
  background-position: center;
  background-repeat: repeat;
  background-size: 4%;
  height: 100%;
  width: 100%;
  transition: all 200ms linear;
  opacity: 0;
}
.dark-light:checked ~ .light-back{
  opacity: 1;
}
.dropdown:checked + label,
.dropdown:not(:checked) + label{
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 2;
  height: 50px;
  transition: all 200ms linear;
  border-radius: 4px;
  width: 220px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  background-color: #ffeba7;
  cursor: pointer;
  color: #102770;
  box-shadow: 0 12px 35px 0 rgba(255,235,167,.15);
}
.dark-light:checked ~ .sec-center .for-dropdown{
  background-color: #102770;
  color: #ffeba7;
  box-shadow: 0 12px 35px 0 rgba(16,39,112,.25);
}
.dropdown:checked + label:before,
.dropdown:not(:checked) + label:before{
  position: fixed;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  z-index: -1;
  cursor: auto;
  pointer-events: none;
}
.dropdown:checked + label:before{
  pointer-events: auto;
}
.dropdown:not(:checked) + label .uil {
  font-size: 24px;
  margin-left: 10px;
  transition: transform 200ms linear;
}
.dropdown:checked + label .uil {
  transform: rotate(180deg);
  font-size: 24px;
  margin-left: 10px;
  transition: transform 200ms linear;
}
.section-dropdown {
  position: absolute;
  padding: 5px;
  background-color: #111;
  top: 70px;
  left: 0;
  width: 100%;
  border-radius: 4px;
  display: block;
  box-shadow: 0 14px 35px 0 rgba(9,9,12,0.4);
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  transform: translateY(20px);
  transition: all 200ms linear;
}
.dark-light:checked ~ .sec-center .section-dropdown {
  background-color: #fff;
  box-shadow: 0 14px 35px 0 rgba(9,9,12,0.15);
}
.dropdown:checked ~ .section-dropdown{
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.section-dropdown:before {
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 20px;
  content: '';
  display: block;
  z-index: 1;
}
.section-dropdown:after {
  position: absolute;
  top: -7px;
  left: 30px;
  width: 0; 
  height: 0; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent; 
  border-bottom: 8px solid #111;
  content: '';
  display: block;
  z-index: 2;
  transition: all 200ms linear;
}
.dark-light:checked ~ .sec-center .section-dropdown:after {
  border-bottom: 8px solid #fff;
}

a {
  position: relative;
  color: #fff;
  transition: all 200ms linear;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;
  border-radius: 2px;
  padding: 5px 0;
  padding-left: 20px;
  padding-right: 15px;
  margin: 2px 0;
  text-align: left;
  text-decoration: none;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  justify-content: space-between;
    -ms-flex-pack: distribute;
}
.dark-light:checked ~ .sec-center .section-dropdown a {
  color: #102770;
}
a:hover {
  color: #102770;
  background-color: #ffeba7;
}
.dark-light:checked ~ .sec-center .section-dropdown a:hover {
  color: #ffeba7;
  background-color: #102770;
}
a .uil {
  font-size: 22px;
}
.dropdown-sub:checked + label,
.dropdown-sub:not(:checked) + label{
  position: relative;
  color: #fff;
  transition: all 200ms linear;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 15px;
  border-radius: 2px;
  padding: 5px 0;
  padding-left: 20px;
  padding-right: 15px;
  text-align: left;
  text-decoration: none;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  justify-content: space-between;
    -ms-flex-pack: distribute;
    cursor: pointer;
}
.dropdown-sub:checked + label .uil,
.dropdown-sub:not(:checked) + label .uil{
  font-size: 22px;
}
.dropdown-sub:not(:checked) + label .uil {
  transition: transform 200ms linear;
}
.dropdown-sub:checked + label .uil {
  transform: rotate(135deg);
  transition: transform 200ms linear;
}
.dropdown-sub:checked + label:hover,
.dropdown-sub:not(:checked) + label:hover{
  color: #102770;
  background-color: #ffeba7;
}
.dark-light:checked ~ .sec-center .section-dropdown .for-dropdown-sub{
  color: #102770;
}
.dark-light:checked ~ .sec-center .section-dropdown .for-dropdown-sub:hover{
  color: #ffeba7;
  background-color: #102770;
}

.section-dropdown-sub {
  position: relative;
  display: block;
  width: 100%;
  pointer-events: none;
  opacity: 0;
  max-height: 0;
  padding-left: 10px;
  padding-right: 3px;
  overflow: hidden;
  transition: all 200ms linear;
}
.dropdown-sub:checked ~ .section-dropdown-sub{
  pointer-events: auto;
  opacity: 1;
  max-height: 999px;
}
.section-dropdown-sub a {
  font-size: 14px;
}
.section-dropdown-sub a .uil {
  font-size: 20px;
}
.logo {
	position: fixed;
	top: 50px;
	left: 40px;
	display: block;
	z-index: 11000000;
  background-color: transparent;
  border-radius: 0;
  padding: 0;
	transition: all 250ms linear;
}
.logo:hover {
  background-color: transparent;
}
.logo img {
	height: 26px;
	width: auto;
	display: block;
  transition: all 200ms linear;
}
.dark-light:checked ~ .logo img{
  filter: brightness(10%);
}

@media screen and (max-width: 991px) {
.logo {
	top: 30px;
	left: 20px;
}
.dark-light:checked + label,
.dark-light:not(:checked) + label{
  top: 20px;
  right: 20px;
}
}

</style>
