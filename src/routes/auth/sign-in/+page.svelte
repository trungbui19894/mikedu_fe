<script lang="ts">
	import { goto } from "$app/navigation";
	import { isSignIn, user } from "$lib/stores/session";

	type Field = {
		error?: string;
		value: string;
	};

	type SignInForm = {
		userName: Field;
		password: Field;
	};

	let signInForm: SignInForm = {
		userName: { value: '' },
		password: { value: '' }
	};
    function onSubmit() {
        isSignIn.set(true);
        user.set({
            userName: signInForm.userName.value,
            avatar: '/images/avatar.jpg'
        })
        goto('/customers/dashboard');
    }
</script>
<div class="flex flex-col w-full h-full items-center mt-20 mx-auto">
    <header>
        <div class="logo mb-10">
            <a href="/">
                <img src="/images/logo.png" alt="logo">
            </a>
        </div>
    </header>
    <main>
        <div class="w-full h-full flex p-5 flex-col items-center shadow-[0_3px_15px_rgba(0,0,0,0.3)] text-[#666666] mb-20">
            <form on:submit|preventDefault={onSubmit}>
                <div class="div">
                    <p class="h4 text-center border-solid border-b border-b-[#ebebeb] mb-4"><b>Đăng nhập tài khoản</b></p>
                    <label class="label mb-4">
                        <span><b>Tên đăng nhập</b></span>
                        <input
                            name="userName"
                            type="userName"
                            bind:value={signInForm.userName.value}
                            placeholder="Nhập tên đăng nhập"
                            required
                            class="input p-2"
                            class:input-error={signInForm.userName.error}
                        />
                    </label>
                    <label class="label mb-4">
                        <span><b>Mật khẩu</b></span>
                        <input
                            name="password"
                            type="password"
                            bind:value={signInForm.password.value}
                            placeholder="Nhập mật khẩu"
                            required
                            class="input p-2"
                            class:input-error={signInForm.password.error}
                        />
                    </label>
                    <div class="w-full">
                        <button type="button" on:click={onSubmit} class="btn w-full bg-[#031589] text-white">Đăng nhập</button>
                    </div>
                </div>
            </form>
        </div>
    </main>
    <footer class="text-center">
        <div>
            <p><b>Copyright © 2018 CÔNG TY CỔ PHẦN ĐÀO TẠO MIKEDU S</b></p>
            <p><b>Địa chỉ: </b>Tầng 12, Tòa Nhà Diamond Flower, Số 1 Hoàng Đạo Thúy, Quận Thanh Xuân, TP.Hà Nội</p>
            <p><b>Loại hình hoạt động: </b>Công ty Cổ Phần - <b>Mã số thuế: </b>0108167999</p>
        </div>
    </footer>
</div>