<template>
    <div class="w-full h-full">
        <form class="flex flex-col min-sm:border min-sm:rounded-lg min-sm:shadow-lg shadow-white-200 max-w-lg border-gray-100 min-sm:p-8">
        <div class="flex flex-row px-4 py-4  justify-between">
            <div class="flex flex-col justify-center text-primary">Total Investment  &nbsp;</div>
            <span></span>
            <div>
                <label class="input-group pl-1">
                    <input class="input input-bordered input-primary" v-model="p" type="number" />
                    <span class="btn bg-black w-12 text-secondary">₹</span>
                </label>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <input type="range" min="0" max="10000000" step="5000" v-model="p" class="range max-sm:w-72 hover:range-accent range-primary" />
        </div>
        <div class="flex flex-row px-4 py-4  justify-between">
            <div class="flex flex-col justify-center text-primary">Monthly Withdrawl &nbsp;</div>
            <span></span>
            <div>
                <label class="input-group pl-1">
                    <input class="input input-bordered input-primary" v-model="Withdrawl" type="number" />
                    <span class="btn bg-black w-12 text-secondary">₹</span>
                </label>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <input type="range" min="0" max="1000000" step="5000" v-model="Withdrawl" class="range max-sm:w-72 hover:range-accent range-primary" />
        </div>
        <div class="flex flex-row px-4 py-4 justify-between">
            <div class="flex flex-col justify-center text-primary">Returns %</div>
            <span></span>
            <div>
                <label class="input-group">
                    <input class="input input-bordered input-primary " v-model="rate" type="number" min="0"  />
                    <span class="btn bg-black w-12 text-secondary">%</span>
                </label>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <input type="range" min="1" max="50" v-model="rate" step="0.1" class="range max-sm:w-72 hover:range-accent range-primary" />
        </div>
        <div class="flex flex-row px-4 py-4  justify-between">
            <div class="flex flex-col justify-center text-primary">Time Period</div>
                <span></span>
            <div>
                <label class="input-group">
                    <input class="input input-bordered input-primary" v-model="time" type="number" min="0" />
                    <span class="btn btn-primary w-12 text-secondary">Yrs</span>
                </label>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <input type="range" min="1" max="70" v-model="time" class="range max-sm:w-72 hover:range-accent range-primary" />
        </div>
        <!-- <div class="flex flex-col items-center">
            <button class="btn mt-6 w-48">Reset</button>
        </div> -->
    </form>
    <div class="flex flex-col min-sm:border min-sm:rounded-lg min-sm:shadow-lg shadow-white-200 border-gray-100 min-sm:p-8 max-lg:mt-6">
        <h2 class="font-heading text-2xl text-accent px-4">Result</h2>
        <div class="flex flex-row px-4 py-4">
            <div class="text-primary">Total Investment</div>
            <span class="flex flex-1"></span>
            <div class="text-primary font-semibold">₹{{Total}}</div>
        </div>
        <div class="flex flex-row px-4 py-4">
            <div class="text-primary">Returns</div>
            <span class="flex flex-1"></span>
            <div class="text-primary font-semibold">₹{{Returns}}</div>
        </div>
        <div class="flex flex-row px-4 py-4">
            <div class="text-primary">Total Value</div>
            <span class="flex flex-1"></span>
            <div class="text-primary font-semibold">₹{{M}}</div>
        </div>
    </div>
    </div>
</template>

<script setup>
const p = ref(1000);
const rate = ref(12);
const time = ref(10);
const Withdrawl = ref(1000)
const Total = computed(()=> {
    let temp=p.value*1;
    return (temp).toLocaleString('en-IN');
});

const M = computed(()=> {
    if(rate.value===0) rate.value =1;
    let i = (rate.value/100)
    let power = Math.pow((1+i),time.value);

   return (Math.round(p.value * power)).toLocaleString('en-IN');
});

const Returns = computed(()=>{
    if(rate.value===0) rate.value =1;
    if(rate.value <0)  rate.value = rate.value*-1;
    if(time.value <0)  time.value = time.value*-1;
    if(p.value <0)  p.value = p.value*-1;
    let i = (rate.value/100)
    let power = Math.pow((1+i),time.value);
    let maturity = Math.round(p.value * power);
    
   return (maturity-p.value).toLocaleString('en-IN');
});

// function reset() {
//     console.log("working")
//     p.value =1000;
//     rate.value=12;
//     time.value=10;
// }



</script>

