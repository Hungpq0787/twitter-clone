<template>
  <div class="flex flex-col">
    <SidebarRightPreviewCard title='What"s happening'>
      <SidebarRightPreviewCardItem
        v-for="(whatsHappening, index) in whatsHappeningItems"
        :key="index"
      >
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ whatsHappening.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <SidebarRightPreviewCard
      title="Who to follow"
      v-for="(whoToFollow, index) in whoToFollowItems"
      :key="index"
    >
      <div class="flex flex-row justify-between p-2">
        <div class="flex flex-row">
          <img
            class="w-10 h-10 rounded-full"
            :src="whoToFollow.image"
            :alt="whoToFollow.name"
          />
          <div class="flex flex-col ml-2">
            <h1 class="text-sm font-bold text-gray-900 dark:text-white">
              {{ whoToFollow.name }}
            </h1>
            <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
          </div>
        </div>
        <div class="flex h-full">
          <button
            class="px-4 py-2 text-xs font-bold dark:text-black bg-black dark:bg-white text-white rounded-full"
          >
            Follow
          </button>
        </div>
      </div>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  {
    title: 'SpaceX',
    count: '18.8k Tweets',
  },
  {
    title: '#CodingIsFun',
    count: '8.8k Tweets',
  },
  {
    title: '#artforall',
    count: '1.8k Tweets',
  },
]);

const whoToFollowItems = ref([
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://picsum.photos/200/200',
  },
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://picsum.photos/200/200',
  },
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://picsum.photos/200/200',
  },
]);
</script>
