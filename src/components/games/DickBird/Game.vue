<template>
    <div id="unity-container" :class="containerClass">
      <canvas id="unity-canvas" ref="canvas" :width="canvasWidth" :height="canvasHeight" tabindex="-1"></canvas>
      <div id="unity-loading-bar" v-show="loading">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full" :style="{ width: progressBarWidth }"></div>
        </div>
      </div>
      <div id="unity-warning" ref="warningBanner"></div>
      <div id="unity-footer">
        <div id="unity-webgl-logo"></div>
        <div id="unity-fullscreen-button" @click="setFullscreen"></div>
        <div id="unity-build-title">FlappyDick</div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';

  const containerClass = ref('unity-desktop');
  const canvasWidth = ref(960);
  const canvasHeight = ref(600);
  const progressBarWidth = ref('0%');
  const loading = ref(true);
  
  const canvas = ref<HTMLCanvasElement | null>(null);
  const unityInstance = ref<any>(null);
  const warningBanner = ref<HTMLElement | null>(null);
  
  const buildUrl = "/Build";
  const loaderUrl = `${buildUrl}/buildes.loader.js`;
  
  const config = {
    dataUrl: `${buildUrl}/buildes.data`,
    frameworkUrl: `${buildUrl}/buildes.framework.js`,
    codeUrl: `${buildUrl}/buildes.wasm`,
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "FlappyDick",
    productVersion: "0.1",
    showBanner: (msg: string, type: string) => {
      if (warningBanner.value) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        warningBanner.value.appendChild(div);
        if (type === 'error') div.style.background = 'red';
        else if (type === 'warning') div.style.background = 'yellow';
        div.style.padding = '10px';
        setTimeout(() => {
          if (warningBanner.value) {
            warningBanner.value.removeChild(div);
          }
        }, 5000);
      }
    }
  };
  
  const onProgress = (progress: number) => {
    progressBarWidth.value = `${100 * progress}%`;
  };
  
  const setFullscreen = () => {
    unityInstance.value?.SetFullscreen(1);
  };

  onMounted(async () => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
      document.getElementsByTagName('head')[0].appendChild(meta);
      containerClass.value = "unity-mobile";
      canvasWidth.value = window.innerWidth;
      canvasHeight.value = window.innerHeight;
    }
  
    loading.value = true;
    const script = document.createElement('script');
    script.src = loaderUrl;
    script.onload = async () => {
      try {
        // @ts-ignore
        unityInstance.value = await createUnityInstance(canvas.value!, config, onProgress);
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };
    document.body.appendChild(script);
  });
  </script>
  
  <style scoped>
#unity-container { position: absolute }
#unity-container.unity-desktop { left: 50%; top: 50%; transform: translate(-50%, -50%) }
#unity-container.unity-mobile { position: fixed; width: 100%; height: 100% }
#unity-canvas { background: #231F20 }
.unity-mobile #unity-canvas { width: 100%; height: 100% }
#unity-loading-bar { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); display: none }
#unity-logo { width: 154px; height: 130px; background: url('@/components/games/DickBird/TemplateData/unity-logo-dark.png') no-repeat center }
#unity-progress-bar-empty { width: 141px; height: 18px; margin-top: 10px; margin-left: 6.5px; background: url('@/components/games/DickBird/TemplateData/progress-bar-empty-dark.png') no-repeat center }
#unity-progress-bar-full { width: 0%; height: 18px; margin-top: 10px; background: url('@/components/games/DickBird/TemplateData/progress-bar-full-dark.png') no-repeat center }
#unity-footer { position: relative }
.unity-mobile #unity-footer { display: none }
#unity-webgl-logo { float:left; width: 204px; height: 38px; background: url('@/components/games/DickBird/TemplateData/webgl-logo.png') no-repeat center }
#unity-build-title { float: right; margin-right: 10px; line-height: 38px; font-family: arial; font-size: 18px }
#unity-fullscreen-button { cursor:pointer; float: right; width: 38px; height: 38px; background: url('@/components/games/DickBird/TemplateData/fullscreen-button.png') no-repeat center }
#unity-warning { position: absolute; left: 50%; top: 5%; transform: translate(-50%); background: white; padding: 10px; display: none }
  </style>