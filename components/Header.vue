<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 w-full shadow-lg py-4">
            <NuxtLink to="/">
            <div class="px-5 uppercase"> <span class=" cursor-pointer text-red-600">Find<span class="font-semibold">YourHouse</span>
                </span></div>
            </NuxtLink>
            <div class="text-end px-5">
                <label for="signup"> <span class="mx-3 px-2 pr-5 border-r-2 cursor-pointer font-sans">Sign up</span></label>
                <label for="Login"><span class="mx-3 p-2  cursor-pointer">Log in</span></label>
            </div>
        </div>


        <input type="checkbox" id="Login" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box relative max-w-2xl p-4 h-screen  overflow-hidden">
                <label for="Login" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                <div class="grid grid-cols-2">
                    <div class="... w-2/5 h-screen absolute left-0 top-0 img1">
                        <!-- Content for the first flex item -->
                        <!-- <h1 class="text-white text-xl font-bold font-serif text-center mt-5">Find Your Home</h1> -->
                        <img src="../assets/images/home3.png" class="w-40 h-40 ml-12">
                        <div class="ml-8 ">
                            <h3 class="text-lime-600 font-bold">Why choose Find your home</h3>
                            <ol class="list-disc text-slate-600">
                                <li>Discover thousands of listings.</li>
                                <li>Personalized search options</li>
                                <li>Stay updated with real-time alerts</li>
                            </ol>
                            <h3 class="text-lime-600 font-bold mt-2">Join Our Community</h3>
                            <ol class="list-disc text-slate-600">
                                <li>Connect with like-minded house hunters.</li>
                                <li>Share your experiences and tips</li>

                            </ol>

                        </div>

                    </div>
                    <div class="... h-screen w-1/2 ml-72 mt-14">
                        <h1 class="ml-28 text-xl font-bold -mb-4">Login</h1>
                        <div class="w-72 mt-10">
                            <FormKit type="text" name="Username" label="Username/Email" placeholder="Username/Email" />

                            <!-- <FormKit type="password" label="Password" prefix-icon="password" suffix-icon="eyeclosed" validation="required" /> -->
                            <FormKit type="password" label=" Password" prefix-icon="password" suffix-icon="eyeClosed"
                                @suffix-icon-click="handleIconClick" validation="required"  />
                        </div>

                        <div class="flex w-96">
                            <h3 class="text-black  mb-10  font-serif">Don't have account ? </h3>
                            <label for="signup"
                                class=" hover:cursor-pointer hover:font-bold pl-1">Register</label>
                        </div>
                        <button class=" btn rounded-none ml-28 text-white" style="background:#009587;">Login</button>

                    </div>
                </div>
            </div>
        </div>

        <input type="checkbox" id="signup" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box relative max-w-2xl p-4 h-screen  overflow-hidden">
                <label for="signup" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                <div class="grid grid-cols-2">
                    <div class="... w-2/5 h-screen absolute left-0 top-0 img1">
                        <!-- Content for the first flex item -->
                        <!-- <h1 class="text-white text-xl font-bold font-serif text-center mt-5">Find Your Home</h1> -->
                        <img src="../assets/images/home3.png" class="w-40 h-40 ml-12">
                        <div class="ml-8 ">
                            <h3 class="text-lime-600 font-bold">Why choose Find your home</h3>
                            <ol class="list-disc text-slate-600">
                                <li>Discover thousands of listings.</li>
                                <li>Personalized search options</li>
                                <li>Stay updated with real-time alerts</li>
                            </ol>
                            <h3 class="text-lime-600 font-bold mt-2">Join Our Community</h3>
                            <ol class="list-disc text-slate-600">
                                <li>Connect with like-minded house hunters.</li>
                                <li>Share your experiences and tips</li>

                            </ol>

                        </div>

                    </div>
                    <div class="... h-screen w-1/2 ml-72 pt-10">
                        <h1 class="  text-xl font-bold ml-28">Register</h1>
                        <div class="w-72 flex-grow mt-4">
                            <FormKit type="text" name="firstname" label="First Name" placeholder="first name"
                                validation="required" />
                            <FormKit type="text" name="mobile" label="Mobile no" prefix-icon="telephone"
                                validation="required" />

                            <FormKit type="password" label=" Password" prefix-icon="password" suffix-icon="eyeClosed"
                                @suffix-icon-click="handleIconClick" validation="required" />
                        </div>

                        <div class="flex justify-center mb-5 ml-32 -mt-2"><label for="signup"
                                class="btn mt-4 rounded-none text-white" style="background: #009587;">Submit</label></div>

                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        handleIconClick: (node, e) => {
            node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
            node.props.type = node.props.type === 'password' ? 'text' : 'password'
        },
        log() {
            window.location.href = '/';
        },
    }
}
</script>

<style  scoped>
.modal-box {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.img1 {
    background-image: url('../assets/images/home1.webp');
}
</style>