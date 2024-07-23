<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import { onMounted, ref } from 'vue';
import loadingIcon from "@/assets/images/loading.svg";
import AcceptIcon from "@/assets/images/acceptet.svg";
import AddIcon from "@/assets/images/addIcon.svg";
import Balance from '../account/Balance.vue';
import { useWebAppPopup } from 'vue-tg'
import question from "@/assets/images/question.svg";
import {useWebAppViewport, useWebApp, useWebAppBackButton, useWebAppTheme, useWebAppClosingConfirmation} from 'vue-tg'
import moment from 'moment';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const userStore = useUserStore()
userStore.getBoosts()
const isPopupVisible = ref(false);
const justOpened = ref(false);

const pageState = ref("posts");

const isPostOptionsSet = ref(false);

const isNextButton = ref(false);
const newPosts = ref({
    image: null as File | null,
    isPrivate: false,
    description: '',
    price: 0,
})

const progressPost = ref(0);
const progressNewPosts = [
    {
        id: 0,
        isActive: true,
        text: "Add image"
    },
    {
        id: 1,
        isActive: false,
        text: "Write description"
    },
    {
        id: 2,
        isActive: false,
        text: "Choose Details"
    }
]


/* skinArea */
import { kStringMaxLength } from 'buffer';
import { isAbsolute } from 'path';
const { setSkin, getCurrentSkin } = userStore;



onMounted(()=>{
    pageState.value = "posts";
    userStore.getPosts();
    console.log(pageState.value);
})

function closePopup() {
  if (justOpened.value) {
    justOpened.value = false;
    return;
  }
  isPopupVisible.value = false;
}

const selectedSkin = ref({
    id: 0,
    price: 1000
});

const posts = [
    {
        id: 0,
        ownerName: "Jack",
        ownerAvatar: "https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png",
        image: "https://goombastomp.com/wp-content/uploads/2022/07/image-34.png",
        description: "Cat from stray",
        donation: 5000,
        isPrivate: false,
    },
    {
        id: 1,
        ownerName: "Ashley",
        ownerAvatar: "https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png",
        image: "https://goombastomp.com/wp-content/uploads/2022/07/image-34.png",
        description: "Cat from stray",
        donation: 1582,
        isPrivate: true
    },
    {
        id: 2,
        ownerName: "Miki115",
        ownerAvatar: "https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png",
        image: "https://goombastomp.com/wp-content/uploads/2022/07/image-34.png",
        description: "Cat from stray",
        donation: 113,
        isPrivate: true
    }
]

const mySkin = ref({
    id: 0
})

const changePageState = (state: string) => {
    if(state == pageState.value) return;
    pageState.value = state
    console.log(state);
}

const onAddFile = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
        newPosts.value.image = files[0];
        isNextButton.value = true;
    }
    console.log(newPosts)
}

const onAddDescription = (e: Event) => {
    console.log(1);
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if (value) {
        newPosts.value.description = value;
    }
    console.log(newPosts)
}

const nextButtonChangeState = () => {
    if(progressPost.value !== 0) isNextButton.value = false
    progressPost.value++;
    progressNewPosts[progressPost.value].isActive = true;
}

const uploadPostState = ref(false);
const createNewPost = () => {
    if(!userStore.user) return;

    if(userStore.user.balance < 5000) {
        useWebAppPopup().showAlert("Недостаточно 🍆 для создания поста");
    }

    newPosts.value.isPrivate = isPostOptionsSet.value;
    if (newPosts.value.image != null) {
        const newPost = {
          image: newPosts.value.image,
          isPrivate: newPosts.value.isPrivate,
          description: newPosts.value.description,
          price: newPosts.value.price
        };
        progressPost.value ++;
        userStore.createPost(newPost).then(result => {
            if(result) {
                setTimeout(() => {
                    progressPost.value = 0;
                    pageState.value = "posts";
                    uploadPostState.value = true;
                    uploadPostState.value = false;
                    userStore.getPosts();
                }, 2500);
            }
        });
    } else {
        console.error('No file selected');
    }
}

const getImageUrl = (path: string) => { return `${import.meta.env.VITE_API_HOST}/uploads/${path}`; }

</script>

<template>
    <div class="Bg"></div>
    <div class="navMenu">
        <button class="mypost-button" @click="changePageState(pageState == 'create' ? 'posts' : 'myposts')">{{ pageState == "create" ? "Posts" :  "My posts" }}</button>
        <img v-if="pageState !== 'create'" :src="AddIcon" alt="Your Icon" :style="{ height: '50px' }" @click="changePageState('create')" />
    </div>
    <div v-if="pageState === 'create'" class="createPostMenu">
        <div>
            <ul id="progressbar">
                <li v-for="item in progressNewPosts" :class="item.isActive ? 'active' : ''">{{  item.text }}</li>
            </ul>
        </div>
        <div class="createForm">
            <div v-if="progressPost === 0" :style="{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }">
                <input class="addFile" type="file" @change="onAddFile">
                <span :style="{ fontWeight:'bold', marginTop: '15px'}">⚠️ Добавить можно только 1 изображение</span>
            </div>
            <div v-if="progressPost === 1" :style="{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }">
                <label for="fname">Описание(не обязательно)</label>
                <input type="text" id="fname" @change="onAddDescription" name="fname">
            </div>
            <div v-if="progressPost === 2" :style="{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }">
                <div :style="{ display: 'flex', alignItems:'center'}">
                    <span :style="{ fontSize: '15px', fontWeight:'bold'}">Платный пост (не обязательно)</span>
                    <div class="checkbox-wrapper-7" :style="{ marginLeft: '20px'}">
                        <input class="tgl tgl-ios" id="cb2-7" type="checkbox" v-model="isPostOptionsSet"/>
                        <label class="tgl-btn" for="cb2-7"></label>
                    </div>
                </div>
                <div v-if="isPostOptionsSet" :style="{ marginTop: '50px', textAlign:'center'}">
                        <span :style="{ fontSize: '15px', fontWeight:'bold'}">Цена за разблокировку:</span>
                        <input type="number" v-model="newPosts.price"/>
                </div>
                <div :style="{ marginTop: '50px', textAlign:'center'}">
                    <span :style="{ fontSize: '15px', fontWeight:'bold'}">Стоимость создания поста: 5000🍆</span>
                </div>
                <div>
                    <button class="mypost-button" :style="{ marginTop: '30px' }" @click="createNewPost">Создать</button>
                </div>
            </div>

            <div v-if="progressPost === 3">
                <div v-if="!uploadPostState" :style="{ display:'flex', flexDirection:'column'}"> 
                    <img :src="loadingIcon" />
                    <span :style="{ fontSize: '17px', fontWeight:'bold', marginTop:'10px' }">Подождите, мы загружаем ваш пост...</span>
                </div>
                <div v-else>
                    <img :src="AcceptIcon" />
                </div>
            </div>
        </div>
        <div v-if="isNextButton" :style="{ display:'flex', justifyContent:'center' }">
            <button class="mypost-button" :style="{ marginTop: '30px' }" @click="nextButtonChangeState">Дальше</button>
        </div>
    </div>

    <div v-if="pageState === 'posts'" class="boosts">
        <div v-for="post in userStore.posts" :key="post.ID" :style="{ width: '100%' }">
                <div class="post">
                    <div class="ownerData">
                        <img :src="post.AvatarURL" :style="{ width: '60px', height: '60px', padding: '5px', borderRadius: '30px' }"/>
                        <span :style="{ fontSize: '25px', marginLeft: '15px' }">{{ post.OwnerName }}</span>
                    </div>
                    <div class="postImage" :style="{ height: '250px', width:'100%', position: 'relative',  filter: post.IsPrivate ? 'blur(0px)' : 'blur(0px)'}" >
                        <img :src="getImageUrl(post.ImagePath)" :style="{ height: 'inherit', width:'100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}" />
                    </div>
                    <div class="postDescription" :style="{ height: '50px', alignItems: 'center', display:'flex' }">
                        <span :style="{ fontSize: '25px' }">{{ post.Description }}</span>
                    </div>
                    <div v-if="post.IsPrivate && post.OwnerID !== userStore.user?.id" class="unlock" :style="{ height: '70px', display:'flex', alignItems:'center', justifyContent: 'space-between', padding: '15px' }">
                        <span :style="{ fontSize: '25px' }">🍆{{ post.Price }}</span>
                        <button class="boost-purchase-button">Unlock</button>
                    </div>
                    <div v-if="post.OwnerID !== userStore.user?.id" class="donations" :style="{ height: '70px', display:'flex', alignItems:'center', justifyContent: 'space-between', padding: '15px' }">
                        <span :style="{ fontSize: '25px' }">🍆{{ post.Donated }}</span>
                        <button class="boost-purchase-button">Donate</button>
                    </div>
                </div>
        </div>
    </div>
    <!-- Модальне вікно для купівлі бусту -->
    <!-- Умовно відображаємо вміст коробки, якщо він існує
    <div v-if="lootboxContent.isOpen" class="lootbox-item">
        {{ lootboxContent }}
    </div> -->
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
  border-bottom: 2px solid rgb(0, 255, 0);
  background: none;
}

input[type=number] {
  width: 40%;
  padding: 12px 20px;
  margin: 30px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid rgb(0, 255, 0);
  background: none;
}

.Bg{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #010300a3;
    position: absolute;
}

.createPostMenu {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    z-index: 10;
}
.createForm {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navMenu{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #010300a3;
    width: 100%;
    z-index: 999;
    top: 0;
}

.boosts {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    backdrop-filter: blur(5px);
}

.boost-purchase-button {
    padding: 10px 20px;
    border: none;
    background-color: #2c2c2c;
    color: white;
    width: 170px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
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


.post {
    height: 100%;
    width: 100%;
    background: "gray";
    display: flex;
    flex-direction: column;
    background: #010300a3;
}
.ownerData {
    display: flex;
    align-items: center;
}

/*progressbar*/
#progressbar {
  margin-bottom: 30px;
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



/* checkbox */


.checkbox-wrapper-7 .tgl {
    display: none;
}
.checkbox-wrapper-7 .tgl,
.checkbox-wrapper-7 .tgl:after,
.checkbox-wrapper-7 .tgl:before,
.checkbox-wrapper-7 .tgl *,
.checkbox-wrapper-7 .tgl *:after,
.checkbox-wrapper-7 .tgl *:before,
.checkbox-wrapper-7 .tgl + .tgl-btn {
    box-sizing: border-box;
}
.checkbox-wrapper-7 .tgl::-moz-selection,
.checkbox-wrapper-7 .tgl:after::-moz-selection,
.checkbox-wrapper-7 .tgl:before::-moz-selection,
.checkbox-wrapper-7 .tgl *::-moz-selection,
.checkbox-wrapper-7 .tgl *:after::-moz-selection,
.checkbox-wrapper-7 .tgl *:before::-moz-selection,
.checkbox-wrapper-7 .tgl + .tgl-btn::-moz-selection,
.checkbox-wrapper-7 .tgl::selection,
.checkbox-wrapper-7 .tgl:after::selection,
.checkbox-wrapper-7 .tgl:before::selection,
.checkbox-wrapper-7 .tgl *::selection,
.checkbox-wrapper-7 .tgl *:after::selection,
.checkbox-wrapper-7 .tgl *:before::selection,
.checkbox-wrapper-7 .tgl + .tgl-btn::selection {
    background: none;
}
.checkbox-wrapper-7 .tgl + .tgl-btn {
    outline: 0;
    display: block;
    width: 4em;
    height: 2em;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.checkbox-wrapper-7 .tgl + .tgl-btn:after,
.checkbox-wrapper-7 .tgl + .tgl-btn:before {
    position: relative;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
}
.checkbox-wrapper-7 .tgl + .tgl-btn:after {
    left: 0;
}
.checkbox-wrapper-7 .tgl + .tgl-btn:before {
    display: none;
}
.checkbox-wrapper-7 .tgl:checked + .tgl-btn:after {
    left: 50%;
}

.checkbox-wrapper-7 .tgl-ios + .tgl-btn {
    background: #fbfbfb;
    border-radius: 2em;
    padding: 2px;
    transition: all 0.4s ease;
    border: 1px solid #e8eae9;
}
.checkbox-wrapper-7 .tgl-ios + .tgl-btn:after {
    border-radius: 2em;
    background: #fbfbfb;
    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease, margin 0.3s ease;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
}
.checkbox-wrapper-7 .tgl-ios + .tgl-btn:hover:after {
    will-change: padding;
}
.checkbox-wrapper-7 .tgl-ios + .tgl-btn:active {
    box-shadow: inset 0 0 0 2em #e8eae9;
}
.checkbox-wrapper-7 .tgl-ios + .tgl-btn:active:after {
    padding-right: 0.8em;
}
.checkbox-wrapper-7 .tgl-ios:checked + .tgl-btn {
    background: #86d993;
}
.checkbox-wrapper-7 .tgl-ios:checked + .tgl-btn:active {
    box-shadow: none;
}
.checkbox-wrapper-7 .tgl-ios:checked + .tgl-btn:active:after {
    margin-left: -0.8em;
}
</style>
