<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-center p-10 px-8">
        <div class="flex gap-x-12">
          <p class="leading-6 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl text-center">
            Energy
            Meter Accuracy</p>
        </div>
      </nav>
    </header>

    <div class="relative isolate sm:px-2 mt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-10 sm:py-10">
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 pb-8 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="mb-8 flex sm:justify-center justify-start">
              <div class="relative text-base leading-6 text-gray-600">
                Determine how much time it will take your meter to drop 1kWH and 10WH given 415V.
              </div>
            </div>
          </div>
        </div>
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
          <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6">

              <div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-3.5 w-3.5 text-red-500" viewBox="0 0 16 16"
                    fill="currentColor">
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                  <label for="redphase" class="block text-sm font-medium leading-6 text-gray-900">Load Readings Red
                    Phase Current
                  </label>
                </div>
                <div class="mt-2">
                  <input name="redphase" type="number" autocomplete="redphase" v-model="redphase" required=""
                    class="block w-full no-arrow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-3.5 w-3.5 text-yellow-500" viewBox="0 0 16 16"
                    fill="currentColor">
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                  <label for="yellowphase" class="block text-sm font-medium leading-6 text-gray-900">Load Readings
                    Yellow
                    Phase Current</label>
                </div>
                <div class="mt-2">
                  <input name="yellowphase" type="number" autocomplete="yellowphase" v-model="yellowphase" required=""
                    class="block w-full no-arrow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-3.5 w-3.5 text-blue-500" viewBox="0 0 16 16"
                    fill="currentColor">
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                  <label for="bluephase" class="block text-sm font-medium leading-6 text-gray-900">Load Readings Blue
                    Phase Current</label>
                </div>
                <div class="mt-2">
                  <input name="bluephase" type="number" autocomplete="bluephase" v-model="bluephase" required=""
                    class="block w-full no-arrow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label for="avgCurrent"
                  class="block text-sm font-medium leading-6 text-gray-900">I<sub>avg</sub></label>
                <div class="mt-2">
                  <input disabled name="avgCurrent" type="number" autocomplete="avgCurrent" :value="avgCurrentCalc()"
                    class="block w-full no-arrow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div class="flex flex-col gap-6">
                <div class="inline-flex items-center">
                  <label class="relative flex items-center p-1 rounded-full cursor-pointer">
                    <input name="1kWH" value="1kWH" id="kwhdrop" type="radio" v-model="timetype"
                      @click="chooseTimeDrop()" required
                      class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-sky-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-sky-900 checked:before:bg-sky-900 hover:before:opacity-10" />
                    <span
                      class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-sky-500" viewBox="0 0 16 16"
                        fill="currentColor">
                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                      </svg>
                    </span>
                  </label>
                  <label class="mt-px font-light text-gray-700 cursor-pointer" for="1kWH">
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                      Determine the time it will take to drop 1kwh
                    </p>
                  </label>
                </div>

                <div class="inline-flex items-center">
                  <label class="relative flex items-center p-1 rounded-full cursor-pointer">
                    <input name="10WH" value="10WH" id="whdrop" type="radio" v-model="timetype"
                      @click="chooseTimeDrop()" required
                      class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-sky-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-sky-900 checked:before:bg-sky-900 hover:before:opacity-10" />
                    <span
                      class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-sky-500" viewBox="0 0 16 16"
                        fill="currentColor">
                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                      </svg>
                    </span>
                  </label>
                  <label class="mt-px font-light text-gray-700 cursor-pointer" for="10WH">
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                      Determine the time it will take to drop 10wh
                    </p>
                  </label>
                </div>
              </div>

              <p v-if="timeCalc !== ''" class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">Timetaken to drop {{timetype}} is {{ timeCalc }}</p>

              <div class="pt-4">
                <button type="submit"
                  class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Calculate
                  Time Taken</button>
              </div>
            </form>
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
      timeCalc: '',
      redphase: '',
      bluephase: '',
      avgCurrent: '',
      yellowphase: '',
      voltage: 415,
      timetype: ''
    }
  },

  methods: {
    avgCurrentCalc() {
      if ((this.redphase && this.yellowphase && this.bluephase) !== 0) {
        this.avgCurrent = (this.redphase + this.yellowphase + this.bluephase) / 3
      } else {
        this.avgCurrent = 0
      }
      return this.avgCurrent
    },

    kwhTimeDrop() {
      let oneKwhTime = 1000 / (this.voltage * this.avgCurrent * Math.sqrt(3))
      this.timeCalc = oneKwhTime
      console.log(this.timeCalc)
      return this.timeCalc
    },

    whTimeDrop() {
      let tenWhTime = 10 / (this.voltage * this.avgCurrent * Math.sqrt(3))
      this.timeCalc = tenWhTime
      console.log(this.timeCalc)
      return this.timeCalc
    },

    chooseTimeDrop() {
      if (this.timetype === 'kwhdrop') {
        this.kwhTimeDrop()
      } else {
        this.whTimeDrop()
      }
    }
  },
}
</script>
<style lang="css">
.no-arrow::-webkit-inner-spin-button,
.no-arrow::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-arrow {
  -moz-appearance: textfield;
}
</style>