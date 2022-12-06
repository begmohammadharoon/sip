<template>
     <div class="flex flex-col mt-2 items-center w-full h-full">
      <div class="flex flex-row">
        <h1 class="flex flex-col justify-center font-heading text-3xl font-bold">Investment Calculators</h1>
        <div class="dropdown dropdown-bottom dropdown-end min-sm:hidden">
            <label tabindex="0" class="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
              <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>      <button class="text-2xl btn btn-secondary min-sm:btn-wide w-32 text-primary" @click="lumpsum" :class="{'btn btn-accent': lump, 'text-secondary': lump, 'border-gray-500': !lump}">Lumpsum</button></a></li>
                <li><a><button class="text-2xl btn btn-secondary items-left min-sm:btn-wide  w-32 text-primary" @click="SIPcal" :class="{'btn btn-accent': sip, 'text-secondary': sip, 'border-gray-500': !sip}">SIP</button></a></li>
                <li><a><button class="text-2xl btn btn-secondary items-left min-sm:btn-wide  w-32 text-primary" @click="SWPcal" :class="{'btn btn-accent': swp, 'text-secondary': swp, 'border-gray-500': !swp}">SWP</button></a></li>
              </ul>
          </div> 
      </div>
    <div class="flex flex-row max-sm:hidden ">
      <button class="text-2xl mt-4 btn btn-secondary min-sm:btn-wide mr-2  w-40 text-primary" @click="lumpsum" :class="{'btn btn-accent': lump, 'text-secondary': lump, 'border-gray-500': !lump}">Lumpsum</button>
      <button class="text-2xl mt-4 btn btn-secondary items-left ml-2 min-sm:btn-wide  w-40 text-primary" @click="SIPcal" :class="{'btn btn-accent': sip, 'text-secondary': sip, 'border-gray-500': !sip}">SIP</button>
      <button class="text-2xl mt-4 btn btn-secondary items-left ml-2 min-sm:btn-wide  w-40 text-primary" @click="SWPcal" :class="{'btn btn-accent': swp, 'text-secondary': swp, 'border-gray-500': !swp}">SWP</button>
    </div>
    <!-- <div v-if="sip" class="mt-4">
      <SIP />
    </div>
    <div v-if="lump" class="mt-4">
      <Lumpsum />
    </div> -->
  </div>
  <slot></slot>
</template>

<script lang="ts" setup>


let lump= ref(false);
let sip= ref(false);
let swp= ref(false)
function lumpsum() {
  lump.value = true;
  sip.value =false;
  swp.value = false;
  useRouter().push("/lumpsum")
}
function SIPcal() {
  lump.value = false;
  sip.value = true;
  swp.value =false;
  useRouter().push("/sip")
}
function SWPcal() {
  lump.value = false;
  sip.value = false;
  swp.value =true;
  useRouter().push("/swp")
}


</script>
