<!-- <template>
  <div>
    <div class="w-full shadow-lg py-4">
      <div class="px-5 flex justify-between cursor-pointer uppercase">
        <NuxtLink to="/">
          <span class="text-red-600"
            >Find<span class="font-semibold">YourHouse</span>
          </span>
        </NuxtLink>
        <NuxtLink to="/"
          ><button class="left-0 relative text-blue-600 hover:text-blue-800">
            Back
          </button></NuxtLink
        >
      </div>
    </div>

    <div class="container mx-auto p-8">
      <h1 class="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Price Statistics
      </h1>
      <div
        v-for="(data, index) in propertyData"
        :key="data.id"
        class="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <span class="block text-lg font-semibold text-gray-700 mb-2"
            >Average Price</span
          >
          <span class="block text-2xl font-bold text-blue-500">{{
            data.averagePrice
          }}</span>
        </div>
        <div
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <span class="block text-lg font-semibold text-gray-700 mb-2"
            >Maximum Price</span
          >
          <span class="block text-2xl font-bold text-blue-500">{{
            data.maximumPrice
          }}</span>
        </div>
        <div
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <span class="block text-lg font-semibold text-gray-700 mb-2"
            >Minimum Price</span
          >
          <span class="block text-2xl font-bold text-blue-500">{{
            data.minimumPrice
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

definePageMeta({
  layout: false,
});

export default {
  data() {
    return {
      selectAreaName: "",
      propertyData: [],
    };
  },
  mounted() {
    // Assuming you pass the job ID through a query parameter named "jobId"
    this.selectAreaName = this.$route.query.area;
    console.log("location here   " + this.selectAreaName);
    this.displayResult();
  },

  methods: {
    async displayResult() {
      //   try {
      //     const body = this.selectAreaName;
      //     console.log("Body Data Here ---------" + body);

      //     const response = await axios.post("/api/propertydata", {
      //       body: body,
      //     });
      //      const prdata = this.propertyData = response.data;
      //     console.log("Response data here ----" + prdata);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
      // const body = this.selectAreaName;
      // const response = $fetch('/api/propertydata', {
      // body: body,
      //     method: "GET",
      // })
      //     .then(async (res) => {
      //         if (res.ok) {
      //             const data = await res.json();
      //             alert(JSON.stringify(data));
      //             console.log("data here----"+data);
      //         } else {
      //             alert('Error: ' + res.status);
      //         }
      //     })
      //     .catch((err) => {
      //         alert(err);
      //     });

      try {
        const Body = this.selectAreaName;
        const response = await axios.post("/api/propertydata", {
          body: Body,
        });
        console.log(response);

        this.propertyData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script> -->

<!-- new code here -->
<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="w-full shadow-lg py-4">
      <div class="px-5 flex justify-between cursor-pointer uppercase">
        <NuxtLink to="/">
          <span class="text-red-600"
            >Find<span class="font-semibold">YourHouse</span>
          </span>
        </NuxtLink>
        <NuxtLink to="/"
          ><button class="left-0 relative text-blue-600 hover:text-blue-800">
            Back
          </button></NuxtLink
        >
      </div>
    </div>

    <div class="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
      <h1 class="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Price Statistics in <span class=" text-red-400">{{ selectAreaName }}</span>
      </h1>
      <div class="mb-4">
        <!-- <input value="btn" class="btn  mb-5 mr-6" type="button"/> -->
        <label class="text-lg font-semibold text-gray-700"
          >Select BHK Type:</label
        >
        <div class="flex space-x-2">
          <label
            v-for="bhkType in bhkTypes"
            :key="bhkType"
            class="inline-flex items-center"
          >
            <input
              type="radio"
              :value="bhkType"
              v-model="selectedBhkType"
              @change="displayResult"
              class="mr-2"
              
            />
            {{ bhkType }}
          
          </label>
        </div>
      </div>
      <!-- <h1>{{ selectedBhkType }}</h1>
      <button @click="displayResult">
            1BHK
          </button> -->

      <div
       
        class="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div
          class="rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out bg-blue-100"
        >
        
          <span class="block text-lg font-semibold text-gray-700 mb-2">
            Average Price
          </span>
          <span class="block text-2xl font-bold text-blue-600">{{
            propertyData.averagePrice
          }}</span>
        </div>
        <div
          class="rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out bg-blue-100"
        >
          <span class="block text-lg font-semibold text-gray-700 mb-2">
            Maximum Price
          </span>
          <span class="block text-2xl font-bold text-blue-600">{{
            propertyData.maximumPrice
          }}</span>
        </div>
        <div
          class="rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out bg-blue-100"
        >
          <span class="block text-lg font-semibold text-gray-700 mb-2">
            Minimum Price
          </span>
          <span class="block text-2xl font-bold text-blue-600">{{
            propertyData.minimumPrice
          }}</span>
        </div>
      </div>
      <!-- <div>{{ propertyData }}</div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

definePageMeta({
  layout: false,
});

export default {
  data() {
    return {
      bhkt: "",
      selectAreaName: "",
      propertyData: [],
      selectedBhkType: "",
      bhkTypes: ["1BHK", "2BHK", "3BHK", "4BHK"], // Add more BHK types as needed
      // user:{
      //   selectedBhkType:""
      // }
    };
  },
  mounted() {
    this.selectAreaName = this.$route.query.area;
    this.selectedBhkType=this.$route.query.bhk;
  console.log("bhk type is:"+this.selectedBhkType);

    this.displayResult();
  },

  methods: {
    async displayResult() {
      try {
        const body = {
          area: this.selectAreaName,
          bhktype: this.selectedBhkType,
        };

        console.log("body data here --" + JSON.stringify(body));

        const response = await axios.post("/api/bhktype",{
          body:body,
        } );
        this.propertyData = response.data;
        console.log("response data here ---" +JSON.stringify(this.propertyData));
      } catch (error) {
       
      }
    },
  },
};
</script>

