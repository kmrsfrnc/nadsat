<script setup>
  import { ref } from 'vue'
  import { handleSearch } from './lib/handleSearch'
  import { X } from 'lucide-vue-next';

  const search = ref('');
  const results = ref([]);
  const enabledKeys = ref([]);

  function doSearch() {
    const [items, keys] = handleSearch(search.value);
    
    results.value = items;
    enabledKeys.value = keys;
  }

  function handleKey(key) {
    search.value = `${search.value}${key}`;
    doSearch();
  }

  function handleBackspace() {
    search.value = search.value.slice(0, -1);
    doSearch();
  }

  function handleReturn() {
    search.value = '';
    doSearch();
  }

  doSearch();
</script>

<template>
  <Layout>
    <template v-slot:header>
      <div v-if="search" class="flex items-center justify-between my-2">
        <p class="text-5xl">{{ search }}</p>
        <button @click="handleReturn">
          <X class="w-5"></X>
        </button>
      </div>
    </template>
    <div v-for="item in results">
      <p class="mb-2"><strong>{{ item.nadsat }}</strong> {{ item.english  }} <em class="muted">{{ item.origin }}</em></p>
    </div>
    <template v-slot:footer>
      <Keyboard
        :enabledKeys="search.result && enabledKeys"
        :handleKey="handleKey"
        :handleBackspace="handleBackspace"
      />
    </template>  
  </Layout>
</template>
