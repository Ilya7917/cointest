<template>
    <div :style="{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'25px', gap:'15px'}">
        <img v-if="clan.ClanPicture != null && clan.ClanPicture != ''" :src="clan.ClanPicture" :style="{ height:'100px', borderRadius:'100%'}" />
            <div v-else :style="{ height:'30px', width:'30px', borderRadius:'100px', background:'gray', justifyContent:'center', alignItems:'center', display:'flex' }">🏰</div>
        <span :style="{ fontSize:'25px', fontWeight:'bold' }">{{ clan.ClanName }}</span>
        <span :style="{ fontSize:'15px', fontWeight:'bold' }">{{ clan.Description }}</span>
        <span>Участников: {{ clan.MemberCount }}👤</span>
        <div v-if="canShowButtonOrText && clan.OwnerID != myUserId" :style="{textAlign:'center', width:'70%'}">
            <button v-if="canShowInviteButton" class="boost-purchase-button" :style="{ backgroundColor:'#3f8b1e' }" @click="createClanMember(clan.ID)">Подать заявку на вступление</button>
            <span v-else>Заявка на вступление в {{ clan.ClanName }} успешно отправлена</span>
        </div>
        <div v-if="clan.ID == myClan?.ID && clan.OwnerID != myUserId" :style="{textAlign:'center', width:'70%'}">
            <button class="boost-purchase-button" :style="{ backgroundColor:'gray' }" @click="leaveClan?.(clan.ID)">Покинуть клан</button>
        </div>            
    </div>

    <div v-if="clan.OwnerID == myUserId" :style="{ display:'flex', justifyContent:'space-between', margin:'15px' }">
        <button class="boost-purchase-button" :style="{ width:'auto', marginLeft:'20px', background:`${localPageState == 'members' ? 'gray' : 'none'}`, border:'1px solid gray' }" @click="localPageState = 'members'">Участники</button>
        <button class="boost-purchase-button" :style="{ width:'auto', marginRight:'20px',background:`${localPageState == 'members' ? 'none' : 'gray'}`, border:'1px solid gray' }" @click="localPageState = 'invites'">Заявки</button>
    </div>

    <div v-if="localPageState == 'members'">
        <div @click="" class="channel">
            <div class="channel-info" :style="{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }">
                <img v-if="clan.OwnerPicture != null && clan.OwnerPicture != ''" :src="clan.OwnerPicture" :style="{ height:'30px', borderRadius:'100px'}" />
                <div v-else :style="{ height:'30px', width:'30px', borderRadius:'100px', background:'gray', justifyContent:'center', alignItems:'center', display:'flex' }">👤</div>
                <span class="name" :style="{ marginLeft:'10px', fontSize:'18px' }">{{ clan.OwnerID == myUserId ? 'Вы' : clan.OwnerName }}</span>
                <div v-if="clan.OwnerID == myUserId" :style="{ marginLeft:'10px'}">
                    <span>👑</span>
                </div>
            </div>
            <div :style="{ marginRight:'15px' }">
                <span> основатель </span>
            </div>
        </div>

        <div v-for="member in members.filter(x => x.Status == 'member')" @click="clan.OwnerID == myUserId ? onOpenUserData?.('memberData', member) : null" class="channel" >
            <div class="channel-info" :style="{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }">
                <img v-if="member.UserPicture != null && member.UserPicture != ''" :src="member.UserPicture" :style="{ height:'30px', borderRadius:'100px'}" />
                <div v-else :style="{ height:'30px', width:'30px', borderRadius:'100px', background:'gray', justifyContent:'center', alignItems:'center', display:'flex' }">👤</div>
                <span class="name" :style="{ marginLeft:'10px', fontSize:'18px' }">{{ member.UserID == myUserId ? 'Вы' : member.UserName }}</span>
            </div>
            <div :style="{ marginRight:'15px' }">
                <span> {{ member.Role }} </span>
            </div>
        </div>
        
    </div>

    <div v-if="localPageState == 'invites'">
        <div v-for="member in members.filter(x => x.Status == 'request')" @click="onOpenUserData?.('invite', member)" class="channel" >
            <div class="channel-info" :style="{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }">
                <img v-if="member.UserPicture != null && member.UserPicture != ''" :src="member.UserPicture" :style="{ height:'30px', borderRadius:'100px'}" />
                <div v-else :style="{ height:'30px', width:'30px', borderRadius:'100px', background:'gray', justifyContent:'center', alignItems:'center', display:'flex' }">👤</div>
                <span class="name" :style="{ marginLeft:'10px', fontSize:'18px' }">{{ member.UserName }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, watch } from "vue";

  const props = defineProps({
    clan: {
        type: Object,
        required: true,
    },
    myUserId: {
        type: Number,
        required: true,
    },
    clansStore: {
        type: Object,
        required: true
    },
    onOpenUserData: {
        type: Function,
        reuired: true,
    },
    needUpdate: {
        type: Boolean,
        required: true,
    },
    myClan: {
        type: Object,
        reuired: true,
    },
    leaveClan: {
        type: Function,
        reuired: true,
    }
  });

  const localPageState = ref('members');
  const canShowButtonOrText = ref(false);
  const canShowInviteButton = ref(false);

  const members = ref<Array<any>>([])

  const createClanMember = (clanID: number) => {
    props.clansStore.createClanMember(clanID).then((ok: any) => {
        if(ok) {
            getClanMembers();
        }
    })
   }

  const getClanMembers = () => {
    props.clansStore.getClanMembers(props.clan.ID).then((data: Array<any>) => {
        members.value = data;
        if(data.length > 0){
            if(data.findIndex(x => x.UserID == props.myUserId) != -1){
                let meInClan = data.findIndex(x => x.UserID == props.myUserId);
                if(data[meInClan].Status == 'member') {
                    canShowInviteButton.value = false;
                    canShowButtonOrText.value = false;
                } else {
                    canShowButtonOrText.value = true;
                    canShowInviteButton.value = false;
                }
            } else {
                canShowButtonOrText.value = true;
                canShowInviteButton.value = true;
            }
        } else {
            canShowButtonOrText.value = true;
            canShowInviteButton.value = true;
        }
    })
   }

  onMounted(() => {
     getClanMembers();
  })


  watch(() => props.needUpdate, (newVal, oldVal) => {
        getClanMembers();
  });
  
  </script>

<style scroped>
.boost-purchase-button {
    padding: 10px 20px;
    border: none;
    background-color: #2c2c2c;
    color: white;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
}
.channel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  background: rgba(128, 128, 128, 0.1);
  color: #fff;
  padding: 20px 10px;
  border-radius: 8px;
  }
  
  .channel-action {
  display: flex;
  align-items: center;
  }
  
</style>