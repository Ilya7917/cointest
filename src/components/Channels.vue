<script lang="ts" setup>
import {Channel, useChannelsStore} from '@/store/channel';
import { useWebAppNavigation } from 'vue-tg'
import { onMounted, ref } from "vue";

const channelsStore = useChannelsStore();
const wn = useWebAppNavigation()
const isPopupVisible = ref(false);
const justOpened = ref(false);

const selectedChannel = ref({
    id: 0,
    title: "",
    reward: 0,
    invite_link: ""
});
onMounted(() => {
  channelsStore.fetchChannels();
});

const openChannelLink = (channel: Channel) => {
  // channel.is_available = false
  selectedChannel.value.id = channel.id
  selectedChannel.value.reward = channel.reward
  selectedChannel.value.title = channel.title
  selectedChannel.value.invite_link = channel.invite_link
  isPopupVisible.value = false;
  justOpened.value = false;
  setTimeout(reOpenPopup, 100)
  console.log(isPopupVisible);
  // wn.openTelegramLink(channel.invite_link)
}

const onPressStartButton = () => {
  
  const channel =  {
    id: selectedChannel.value.id,
    title: selectedChannel.value.title,
    invite_link: selectedChannel.value.invite_link,
    reward: 0,
    is_available: true
  }

  channelsStore.startChannel(channel).then(result => {
    if(result)
    {
        isPopupVisible.value = false;
        wn.openTelegramLink(selectedChannel.value.invite_link)  
    }
  })
}

const reOpenPopup = () => {
  isPopupVisible.value = true;
};

function closePopup() {
  isPopupVisible.value = false;
}

const channels = [  
  {
    id: 0,
    title: "Test",
    invite_link: "http://1111.com",
    reward: 10000,
    is_available: true
  },
  {
    id: 1,
    title: "Tes121t",
    invite_link: "http://1111.com",
    reward: 10,
    is_available: true
  }
]
</script>

<template>
  <div class="telegram-channels">
    <div class="earn-title">
      🤑 {{ $t("earn.name") }}
    </div>
    <div class="channels-title">
      📢 {{ $t("earn.channels") }}
    </div>
    <div class="channels-list">
      <div v-for="channel in channelsStore.channels" :key="channel.id" @click="openChannelLink(channel)" class="channel">
        <div class="channel-info">
          <span class="name">{{ channel.title }}</span>
        </div>
        <div class="channel-action">
          <span v-if="channel.is_available" class="reward">🍆 {{ channel.reward.toLocaleString() }}</span>
          <span v-else class="reward">💠 {{ $t("earn.rewardReached") }}</span>
          <svg class="arrow">
            <use xlink:href="@/assets/images/sprite.svg#chevron-right"></use>
          </svg>
<!--          <button v-if="channel.is_available" class="button" @click="openChannelLink(channel)">Join</button>-->
        </div>
      </div>
    </div>

    <div v-if="isPopupVisible" class="boost-purchase-popup" :class="{ 'visible': isPopupVisible }">
<!--        <div class="popup-overlay" @click="closePopup"></div>-->
        <div class="popup-content" v-click-outside="closePopup">
            <div class="popup-header">
                <h2>Earn coins</h2>
                <button class="close-button" @click="closePopup">
                  <svg class="close-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="16px" height="16px">
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
                  </svg>
                </button>
            </div>
            <div class="popup-body">
                <p>{{ $t("earn.selectedChannel") }}</p>
                <p>🍆{{ selectedChannel.reward }}</p>
                <button class="boost-purchase-button" @click="onPressStartButton">{{  $t("earn.startRewardButton") }}</button>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

.telegram-channels {
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
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
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
</style>
