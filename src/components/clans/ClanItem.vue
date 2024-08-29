<template>
    <div v-if="clans.length == 0" :style="{ height:'85vh', display:'flex', alignItems:'center', justifyContent:'center' }">
      <span :style="{ fontSize:'25px' }">Здесь пока ещё нету кланов</span>
    </div>
    <div v-else id="MyOrders" v-for="clan in clans" :key="clan.ID" @click="" class="channel">
        <div @click="changePageState('claninfo', clan)" class="channel-info" :style="{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }">
            <img v-if="clan.ClanPicture != null && clan.ClanPicture != ''" :src="clan.ClanPicture" :style="{ height:'30px', borderRadius:'100px'}" />
            <div v-else :style="{ height:'30px', width:'30px', borderRadius:'100px', background:'gray', justifyContent:'center', alignItems:'center', display:'flex' }">🏰</div>
            <span class="name" :style="{ marginLeft:'10px', fontSize:'18px' }">{{ clan.ClanName }}</span>
            <div v-if="clan.OwnerID == myUserId" :style="{ marginLeft:'10px'}">
                <span>👑</span>
            </div>
        </div>
        <div>
            <div :style="{ display:'flex', flexDirection:'column'}">
                <span :style="{ fontSize:'17px' }">{{ clan.MemberCount }}👤</span>
            </div>
        </div>
        <div  >
            <svg class="arrow">
                <use xlink:href="@/assets/images/sprite.svg#chevron-right"></use>
            </svg>
        </div>
    </div>
  </template>
  
  <script setup>
  
  const props = defineProps({
    clans: {
        type: Array,
        required: true
    },
    myUserId: {
        type: Number,
        required: true
    },
    changePageState: {
        type: Function,
        required: true
    }
  });
  
  </script>
  
<style scoped>
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