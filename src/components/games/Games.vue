<template>
    <div class="bg">
        <div v-if="!openGame" v-for="(post, index) in games" @click="changeOpenGame(true, post.name)" :style="{ width: '60%', margin:'0 auto', marginTop:'30px' }">
                <div class="post">
                    <div class="postImage">
                        <img :src="post.img" :style="{ maxWidth: '100%', height: 'auto', width:'100%', borderRadius:'20px'}" />
                    </div>
                    <div class="postDescription" :style="{ display:'flex', alignItems:'center', justifyContent:'center' }">
                        <span>{{ post.name }}</span>
                    </div>
                </div>
        </div>
        <div v-else>
            <Game v-if="selectedGame == 'FlappyDick'" />
            <GameJump v-if="selectedGame == 'DickJump'" />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import Bird from './Bird.vue';
    import { ref } from 'vue';

    import BirdImage from '@/assets/images/flappybird/FlappyDickIcon.png';
    import DickJump from '@/assets/images/dickJump.png'

    import Game from './DickBird/Game.vue';
    import GameJump from './DickJump/GameJump.vue';

    const openGame = ref(false);
    const selectedGame = ref('');

    declare global {
        interface Window {
        MyJSFunction: (message: string) => void;
        }
    
    }

    window.MyJSFunction = function(message: string) {
        console.log(message);
    };

    const changeOpenGame = (state: boolean, gameName: string) => {
        selectedGame.value = gameName;
        openGame.value = state;
    }

    const games = [
        {
            name: 'FlappyDick',
            img: BirdImage,
        },
        {
            name: 'DickJump',
            img: DickJump,
        }
    ]

</script>

<style scroped>
.bg {
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

.post {
    height: 100%;
    width: 100%;
    background: "gray";
    display: flex;
    flex-direction: column;
    background: #362b37;
    border-radius: 16px;
}
</style>