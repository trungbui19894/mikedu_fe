<script lang="ts">
	import { isSignIn, user } from '$lib/stores/session';
	import '../app.postcss';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import Fa from 'svelte-fa';
	import { faBars, faGear, faDashboard } from '@fortawesome/free-solid-svg-icons';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { TreeView, TreeViewItem, RecursiveTreeView, type TreeViewNode } from '@skeletonlabs/skeleton';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	
	console.log('page', page)


	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
			
	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom',
	};
	// isSignIn.set(true)
	type LinkChild = {
		href: string;
		text: string;
	}
	type Link = {
		href: string;
		text: string;
		child: LinkChild[]
	};
	const sideNavList: Link[] = [
		{ href: '/customers/information', text: 'Quản lý thông tin', child: [] },
		{ href: '/customers/payments', text: 'Thanh toán', child: [
			{ href: '/customers/payments', text: 'Quản lý nạp' },
			{ href: '/customers/payments_down', text: 'Quản lý nạp (Đại lí dưới)' }
		]},
		{ href: '/customers/links', text: 'Quản lý links', child: [
			{ href: '/customers/links?publish=0', text: 'Links đã dùng' },
			{ href: '/customers/links?status=1', text: 'Links đã bán' },
			{ href: '/customers/links?status=0', text: 'Links chưa dùng' },
			{ href: '/customers/quick_links', text: 'Chuyển links (Đại lí dưới)' }
		]},
		{ href: '/customers/members', text: 'Danh sách thành viên', child: [] },
		{ href: '/customers/list-order', text: 'Danh sách mua links', child: [] },
		{ href: '/customers/with-drawal', text: 'Danh sách rút tiền Affiliate', child: [] },
		{ href: '/customers/export', text: 'Trích xuất', child: [] },
	]
</script>
{#if $isSignIn}
	<AppShell>
		<svelte:fragment slot="pageHeader">
			<div class="bg-[#3c8dbc] h-[50px] w-full flex flex-row justify-between text-white">
				<div class="lead">
					<button on:click={() => {}} class="btn px-8 py-4 w-fit">
						<Fa icon={faBars} />
					</button>
				</div>
				<div class="trail">
					<button class="btn variant-filled" use:popup={popupFeatured}>{$user?.userName}</button>
					<div class="card p-5 shadow-xl text-[#333333] max-w-[250px]" data-popup="popupFeatured">
						<p class="mb-3">{$user?.userName} Đại lý (10:38 - 22/09/2023)</p>
						<div class="flex flex-row justify-between items-center">
							<a href="/customers/information" class="card card-hover !bg-[#f4f4f4] py-1.5 px-3">Hồ sơ</a>
							<a href="/customers/log-out" class="card card-hover !bg-[#f4f4f4] py-1.5 px-3">Đăng xuất</a>
						</div>
					</div>
				</div>		
			</div>
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">
			<div class="flex flex-col h-full w-full">
				<header class="bg-[#367fa9] w-[200px] h-[50px]">
					<div class="h-full w-full">
						<a href="/" class="h-full w-full flex items-center justify-center">
							<img src="/images/logo.png" alt="logo" class="object-cover absolute h-[40px]">
						</a>
					</div>
				</header>
				<main class="bg-[#222d32] w-[200px] h-[calc(100vh-50px)]">
					<div class="w-full flex flex-row gap-2.5 p-2.5 text-white">
						<div class="rounded-full overflow-hidden w-[45px] h-[45px]">
							<img src={$user?.avatar} alt="avatar" class="object-cover">
						</div>
						<div>
							<p>{$user?.userName}</p>
							<div class="flex flex-row items-center">
								<div class="mr-1 bg-[#3c763d] rounded-full w-[14px] h-[14px]"/>
								Online
							</div>
						</div>
					</div>
					<div class="text-white">
						<TreeView padding="px-2.5 py-2">
							<TreeViewItem>
								<div class="flex flex-row items-center">
									<Fa icon={faGear} class="mr-2"/>
									Quản lý
								</div>
								<svelte:fragment slot="children">
									{#each sideNavList as list}
										<TreeViewItem>
											<a href={list.href} class="text-xs">{list.text}</a>
											<svelte:fragment slot="children">
												{#each list.child as child}
													<TreeViewItem>
														<a href={child.href} class="text-xs">{child.text}</a>
													</TreeViewItem>
												{/each}
											</svelte:fragment>
										</TreeViewItem>
									{/each}
								</svelte:fragment>
							</TreeViewItem>
						</TreeView>
					</div>
				</main>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="pageFooter">
			<div class="p-4"><p><b>Copyright © 2015 <a href="/" class="text-[#3c8dbc]">MIKEDU S </a>by </b>All rights reserved.</p></div>
		</svelte:fragment>
		<div class="h-full w-full">
			<div class="p-4">
				<header class="flex flex-row justify-between items-center">
					<p class="h1">Bảng điều khiển</p>
					<ol class="breadcrumb max-w-fit">
						<li class="crumb">
							<a href="/admin" class="flex flex-row items-center"><Fa icon={faDashboard} class="mr-2.5"/>Bảng điều khiển</a>
						</li>
						<li class="crumb-separator" aria-hidden>&rsaquo;</li>
						<li class="crumb">
						</li>
					</ol>
				</header>
				<slot />
			</div>
		</div>
	</AppShell>
{:else}
	<slot />
{/if}