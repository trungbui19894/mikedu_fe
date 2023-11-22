<script lang="ts">
	import Fa from 'svelte-fa';
	import { faShoppingBag, faCircleArrowRight, faDashboard, faUserFriends, faWarning, faColumns } from '@fortawesome/free-solid-svg-icons';
</script>

<main class="flex flex-row mt-4 gap-8">
<div class="bg-[#00c0ef] basis-1/4 w-full h-full text-white">
    <div class="p-2.5 flex flex-row justify-between items-center">
        <div>
            <p class="h1 mb-2.5">25</p>
            <p>Tổng số links</p>
        </div>
        <Fa icon={faShoppingBag} size="6x" class="text-[rgba(0,0,0,0.15)]"/>
    </div>
    <footer class="text-center flex justify-center bg-[rgba(0,0,0,0.1)]">
        <a href="/customers/links" class="flex flex-row items-center text-xs py-1">More info <Fa icon={faCircleArrowRight} class="ml-1"/></a>
    </footer>
</div>
<div class="bg-[#00a65a] basis-1/4 w-full h-full text-white">
    <div class="p-2.5 flex flex-row justify-between items-center">
        <div>
            <p class="h1 mb-2.5">22</p>
            <p>Số link chưa sử dụng</p>
        </div>
        <Fa icon={faColumns} size="6x" class="text-[rgba(0,0,0,0.15)]"/>
    </div>
    <footer class="text-center flex justify-center bg-[rgba(0,0,0,0.1)]">
        <a href="/customers/links?status=0&publish=1" class="flex flex-row items-center text-xs py-1">More info <Fa icon={faCircleArrowRight} class="ml-1"/></a>
    </footer>
</div>
<div class="bg-[#f39c12] basis-1/4 w-full h-full text-white">
    <div class="p-2.5 flex flex-row justify-between items-center">
        <div>
            <p class="h1 mb-2.5">1</p>
            <p>Tổng thành viên</p>
        </div>
        <Fa icon={faUserFriends} size="6x" class="text-[rgba(0,0,0,0.15)]"/>
    </div>
    <footer class="text-center flex justify-center bg-[rgba(0,0,0,0.1)]">
        <a href="/customers/members" class="flex flex-row items-center text-xs py-1">More info <Fa icon={faCircleArrowRight} class="ml-1"/></a>
    </footer>
</div>
<div class="bg-[#dd4b39] basis-1/4 w-full h-full text-white">
    <div class="p-2.5 flex flex-row justify-between items-center">
        <div>
            <p class="h1 mb-2.5">0 vnđ</p>
            <p>Số dư khả dụng</p>
        </div>
        <Fa icon={faWarning} size="6x" class="text-[rgba(0,0,0,0.15)]"/>
    </div>
    <footer class="text-center flex justify-center bg-[rgba(0,0,0,0.1)]">
        <a href="/customers/payments" class="flex flex-row items-center text-xs py-1">More info <Fa icon={faCircleArrowRight} class="ml-1"/></a>
    </footer>
</div>
</main>