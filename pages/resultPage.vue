<template>
    <div class="bg-slate-100">
        <!-- main div  -->
        <div class="grid grid-cols-3 w-full my-2 relative">
            <!-- first div  -->
            <div class="border-r-2 p-5  bg-white m-2">

                <div class="sticky top-10">
                    <div class="shadow-lg border-green-500 border-b-2 ">Filters</div>
                    <div class="text-end">Reset</div>
                    <div>BHK Type</div>
                    <div class="flex flex-wrap">
                        <span class="py-1 px-2 shadow-md">1 RK</span>
                        <span class="py-1 px-2 shadow-md">1 BHK</span>
                        <span class="py-1 px-2 shadow-md">2 BHK</span>
                        <span class="py-1 px-2 shadow-md">3 BHK</span>
                        <span class="py-1 px-2 shadow-md">4 BHK</span>
                        <span class="py-1 px-2 shadow-md">+ BHK</span>
                    </div>
                    <div class="py-2">
                        <span class=" text-sm font-semibold">Rent Range: 0 to 8 Cr</span>
                    </div>
                    <div>
                        <span class="">
                            <p class="my-1">Value: {{ formatCurrency(value) }} </p>
                            <!-- <span class="text-end">3</span> -->
                        </span>
                        <div class="flex justify-between">
                            <span>{{formatCurrency(minValue) }}</span>
                            <span>{{ formatCurrency(maxValue) }} </span>
                        </div>
                        <input type="range" id="Range" :min="minValue" :max="maxValue" :step="1e5" v-model="value"
                            class=" range-xs range-info w-full" @change="updateValue()" />


                    </div>



                    <!-- <div class="py-2 text-sm">Availability</div>

                <div class="grid grid-cols-2 space-y-1 text-sm mb-3">
                    <div class="flex">
                        <input type="radio" class="">
                        <p class="pl-2">Immidiate</p>
                    </div>
                    <div class="flex">
                        <input type="radio" class="">
                        <p class="pl-2">Within 15 Days</p>
                    </div>
                    <div class="flex">
                        <input type="radio" class="">
                        <p class="pl-2">Within 30 Days</p>
                    </div>
                    <div class="flex">
                        <input type="radio" class="">
                        <p class="pl-2">After 30 Days</p>
                    </div>
                </div>


                <div class="py-2 text-sm">Preferred Tenants</div>

                <div class="grid grid-cols-2 space-y-1 text-sm mb-3">
                    <div class="flex">
                        <input type="checkbox" class="">
                        <p class="pl-2">Family</p>
                    </div>
                    <div class="flex">
                        <input type="checkbox" class="">
                        <p class="pl-2">company</p>
                    </div>
                </div>


                <div class="py-2 text-sm">Property Type</div>

                <div class=" space-y-1 text-sm mb-3">
                    <div class="flex">
                        <input type="checkbox" class="">
                        <p class="pl-2">Apartment</p>
                    </div>
                    <div class="flex">
                        <input type="checkbox" class="">
                        <p class="pl-2">Independent House/villa</p>
                    </div>
                </div>


                <div class="py-2 text-sm">Parking</div>

                <div class=" grid grid-cols-1 md:grid-cols-3 space-y-1 text-sm mb-3">
                    <div class="flex">
                        <input type="checkbox" class="">
                        <p class="pl-2">Full</p>
                    </div>
                    <div class="flex">
                        <input type="checkbox" class="">
                        <p class="pl-2">Semi</p>
                    </div>
                    <div class="flex">
                        <input type="checkbox" class="">
                        <p class="pl-2">None</p>
                    </div>
                </div>

                <div class="py-2 text-sm">Parking</div>

                <div class="grid grid-cols-2 space-y-1 text-sm mb-3">
                    <div class="flex">
                        <input type="checkbox" class="">
                        <p class="pl-2">2 Wheeler</p>
                    </div>
                    <div class="flex">
                        <input type="checkbox" class="">
                        <p class="pl-2">4 Wheeler</p>
                    </div>
                    <div class="flex">
                        <input type="checkbox" class="">
                        <p class="pl-2">Show Only Lease Properties</p>
                    </div>
                </div> -->
                </div>
            </div>
            <!-- first div ends here  -->

            <!-- second div starts here -->
            <div class="col-span-2 m-2   ">
                <!-- v-for="(i, index) in Flats" :key="index"  -->
                <div v-for="(i, index) in Flats" :key="index" class="mb-5 bg-white">
                    <div class="w-full overflow-hidden border px-3 py-2">
                        <div>Your Address</div>
                        <p>{{ i.address }} </p>
                    </div>
                    <div>
                        <div>
                            <div class="grid grid-cols-3 text-center text-sm py-4 my-2 border">
                                <div class="border-r"><span>{{ i.amount }}</span><br> <span>per sq.ft</span></div>
                                <div class="border-r"><span>{{ i.EMI }}</span><br> <span>Estimated EMI</span></div>
                                <div><span>{{ i.buildUp }}</span><br> <span>Builtup</span></div>
                            </div>
                            <div class="grid grid-cols-2 gap-3">
                                <!-- image here  -->
                                <div class="w-full h-52 bg-slate-200 gap-1 m-2"></div>
                                <!-- detisl here  -->
                                <div class="w-full grid grid-cols-2 gap-2 border m-2">
                                    <div class="border text-center  pt-10">Furnished</div>
                                    <div class="border text-center  pt-10">{{ i.ApartmentType }}</div>
                                    <div class="border text-center  pt-10">Ready to Move</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            Flats: [
                {
                    address: "Sainagar, kondwa bk, pune",
                    amount: "55 Lacs",
                    EMI: "31,522/Monts",
                    buildUp: "853 sqft",
                    ApartmentType: "2 BHK"

                },
                {
                    address: "Sainagar, kondwa bk, pune",
                    amount: "55 Lacs",
                    EMI: "31,522/Monts",
                    buildUp: "853 sqft",
                    ApartmentType: "2 BHK"

                },
                {
                    address: "Sainagar, kondwa bk, pune",
                    amount: "55 Lacs",
                    EMI: "31,522/Monts",
                    buildUp: "853 sqft",
                    ApartmentType: "2 BHK"

                },
                {
                    address: "Sainagar, kondwa bk, pune",
                    amount: "55 Lacs",
                    EMI: "31,522/Monts",
                    buildUp: "853 sqft",
                    ApartmentType: "2 BHK"

                },
            ],
            minValue: 2e5,
            maxValue: 8e6,
            value: 4e6, // Initial value

        }
    },
    mounted() {


    },
    computed: {

    },
    methods: {

        formatCurrency(value) {
            if (value >= 1e6) {
                // Value is 1 Crore or more
                return (value / 1e6).toFixed(2) + ' Crores';
            } else {
                // Value is less than 1 Crore
                return (value / 1e5).toFixed(2) + ' Lakhs';
            }
        },
    },
    watch: {
        currentValue(newvalue) {

        }
    }
}
</script>

<style></style>