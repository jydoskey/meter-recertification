<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-center p-10 px-8">
        <div class="flex gap-x-12">
          <P class="leading-6 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl text-center">
            Energy
            Meter Accuracy</P>
        </div>
      </nav>
    </header>

    <div class="relative isolate sm:px-2 mt-28 lg:-mt-32 lg:px-8">
      <div class="mx-auto max-w-2xl py-10 sm:py-10">
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 pb-8 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="mb-8 flex sm:justify-center justify-start">
              <div class="relative text-base leading-6 text-gray-600">
                Determine how much time it will take your meter to drop 1kWH and 10WH.
              </div>
            </div>
          </div>
        </div>
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
          <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6">
              <div>
                <label for="redphase" class="block text-sm font-medium leading-6 text-gray-900">Load Readings Red Phase
                  Current</label>
                <div class="mt-2">
                  <input name="redphase" type="number" autocomplete="redphase" required=""
                    class="block w-full no-arrow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label for="yellowphase" class="block text-sm font-medium leading-6 text-gray-900">Load Readings Yellow
                  Phase Current</label>
                <div class="mt-2">
                  <input name="yellowphase" type="number" autocomplete="yellowphase" required=""
                    class="block w-full no-arrow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label for="bluephase" class="block text-sm font-medium leading-6 text-gray-900">Load Readings Blue
                  Phase Current</label>
                <div class="mt-2">
                  <input name="bluephase" type="number" autocomplete="bluephase" required=""
                    class="block w-full no-arrow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label for="avgCurrent" class="block text-sm font-medium leading-6 text-gray-900">I<sub>avg</sub></label>
                <div class="mt-2">
                  <input disabled name="avgCurrent" type="number" autocomplete="avgCurrent" required=""
                    class="block w-full no-arrow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

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

<script setup>
import { ref } from 'vue'
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