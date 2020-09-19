<template>
  <section class="bg-white border-b py-8">
    <div class="pt-24">
        <div
        class="container px-3 mx-auto flex flex-wrap flex-row md:flex-col items-center"
        >
            <div class="flex flex-wrap flex-col md:flex-row items-center mt-20 mb-20">
                <div class="rounded-full w-64 h-64 flex items-center justify-center m-5 border-2 border-gray-300">
                    <img src="~/assets/img/green-tea.png" style="object-fit:cover;border-radius:50%;"/>
                </div>
                <div class="pointer m-2"></div>
                <div class="rounded-full w-64 h-64 flex items-center justify-center m-5 border-2 border-gray-300">
                    <img src="~/assets/img/smiling-people.png" style="object-fit:cover;border-radius:50%;"/>
                </div>
                <div class="pointer m-2"></div>
                <div class="rounded-full w-64 h-64 flex items-center justify-center m-5 border-2 border-gray-300">
                    <img src="~/assets/img/earth.png" style="object-fit:cover;"/>
                </div>
            </div>
        <div
            class="flex flex-col w-full md:w-4/5 justify-center items-start text-center md:text-left mt-20"
        >
            <ol class="text-black">
                <li class="leading-normal text-4xl mb-20  flex flex-row">
                    <span
                        class="rounded-full w-12 h-12 flex items-center justify-center mr-20 border-2 border-black">
                    1</span>
                    <div class="self-center">Make your brand plastic free</div>
                </li>
                <li class="leading-normal text-4xl mb-20 flex flex-row">
                    <span 
                        class="rounded-full w-12 h-12 flex items-center justify-center mr-20 border-2 border-black">
                    2</span>
                    <div class="self-center">As a community, earn money while improving your green status</div>
                    
                </li>
                <li class="leading-normal text-4xl mb-20 flex flex-row">
                    <span 
                        class="rounded-full w-12 h-12 flex items-center justify-center mr-20 border-2 border-black">
                    3</span>
                    <div class="self-center">Let's clean the world together!</div>
                    
                </li>
            </ol>
        </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Abstract'
}
</script>

<style>
    .pointer {
      width: 100px;
      height: 40px;
      position: relative;
      background: #3a85ff88;
    }
    .pointer:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 20px solid white;
      border-top: 20px solid transparent;
      border-bottom: 20px solid transparent;
    }
    .pointer:before {
      content: "";
      position: absolute;
      right: -20px;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 20px solid #3a85ff88;
      border-top: 20px solid transparent;
      border-bottom: 20px solid transparent;
    }
</style>