<template>
  <div class="loop">

    
    <div class="header">
        <div class="burger_menu" id="burgerMenu">
            <span class="burger_menu"></span>
        </div>
        <div class="burger_list" id="burgerList">
            <ul>
                <li class="sidebar_item">
                    <a href="">
                        <img src="@/assets/sidebar/case.png" alt="" class="sidebar_nav_icon">
                        <p>Мой профиль</p>
                    </a>
                </li>
                <li class="sidebar_item">
                    <a href="">
                        <img src="@/assets/sidebar/list.png" alt="" class="sidebar_nav_icon">
                        <p>Список задач</p>
                    </a>
                </li>
                <li class="sidebar_item">
                    <a href="">
                        <img src="@/assets/sidebar/quest.png" alt="" class="sidebar_nav_icon">
                        <p>Статистика</p>
                    </a>
                </li>
            </ul>
        </div>
        <img src="assets/logo.png" alt="" class="logo logo_header_mobile">
    </div>

    <div class="flex_helper">
        <div class="sidebar">
                
                <ul>
                    <img src="@/assets/logo.png" alt="" class=" logo logo_profile">
                    <li class="sidebar_item">
                        <a href="">
                            <img src="@/assets/sidebar/case.png" alt="" class="sidebar_nav_icon">
                            <p>Мой профиль</p>
                        </a>
                    </li>
                    <li class="sidebar_item">
                        <a href="">
                            <img src="@/assets/sidebar/list.png" alt="" class="sidebar_nav_icon">
                            <p>Список задач</p>
                        </a>
                    </li>
                    <li class="sidebar_item">
                        <a href="">
                            <img src="@/assets/sidebar/quest.png" alt="" class="sidebar_nav_icon">
                            <p>Статистика</p>
                        </a>
                    </li>
                </ul>
        </div><!-- sidebar end-->
        <div class="content_profile">
            <div class="title">Мой профиль</div>

            <div class="profile_form">
                <div class="flex_helper">
                    <div class="flex_inner flex_left">
                        <label for="name" class="profile_label">Имя</label>
                        <input type="text" class="profile_input" id="name">
                        <label for="surname" class="profile_label">Фамилия</label>
                        <input type="text" class="profile_input" id="surname" >
                    </div>
                    <div class="flex_inner ">
                        <label for="profile_pass" class="profile_label">Сменить пароль</label>
                        <input type="password" class="profile_input" id="profile_pass">
                        <label for="profile_log" class="profile_label">Сменить логин</label>
                        <input type="email" class="profile_input" id="profile_log" >
                    </div>
                </div>
                <button class="btn btn--sm profile_save">Сохранить</button>
            </div>

        </div>
    </div>

  </div>
</template>

<script>

export default {
    name: 'personal',
    path: '/personal',
    components: 'personal'
}
</script>

<style scoped>
    *{
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    outline: none;
}

body {
    margin: 0;
    padding: 0;
    background: #fff;
    line-height: 20px;  
}

a {
    text-decoration: none;
    color: inherit;
}

li {
    list-style-type: none;
}

.flex_helper {
    display: flex;
}

.header {
    height: 64px;
}

.conteiner {
    display: block;
    max-width: 1280px;
    height: 100%;
    
    margin: auto;
    text-align: center;
}

.singin_form {
    display: block;
    max-width: 350px;
    padding: 0 4px;
    margin: 180px auto;

}

.logo {
    width: 130px;
    height: 30px;
}

.form_input {
    width: 100%;
    height: 44px;

    margin: 16px 0;
    border: 1px solid #CBCBCB;
    box-sizing: border-box;
    border-radius: 10px;

    font-weight: 400;
    color: #9496A6;
    font-family: 'Montserrat', sans-serif;

}

.btn {
    width: 100%;
    height: 44px;

    border-radius: 10px;
    border: none;

    background: #D6073D;
    color: #fff;
    font-weight: 500;
}

.btn--sm {
    width: 200px;
}

.sidebar {
    display: block;
    width: 200px;

    background: #fff;

    padding: 40px 0;
    box-sizing: border-box;

    

}

.sidebar_inner {
    display: block;
}

.logo_profile {
    margin-bottom: 30px;
}

.sidebar_item a {
    display: flex;
}

.sidebar_item a p {
    transform: translateY(-10px);
}

.sidebar_nav_icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
}

.content_profile {
    display: block;
    max-width: 1080px;
    min-height: 100vh;
    background: #EFF1F9;

    padding: 50px;
    box-sizing: border-box;
}

.profile_form {
    display: block;

    background: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 40px;
}

.flex_inner {
    box-sizing: border-box;
    width: 50%;
    
}

.flex_left {
    margin-right: 80px;
}

.title {
    font-size: 20px;
    font-weight: 500;
    color: #303136;
    margin-bottom: 48px;
}

.profile_input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid #6F849C;
    color: #303136;
    margin-top: 32px;
    margin-bottom: 24px;
}

.profile_label {
   color: #6F849C; 
   font-weight: 400;
}

.profile_save {
    display: block;
    margin-left: auto;
}

.header {
    display: none;
}

.logo_header_mobile {
    display: block;
    margin: 5px auto;
}



.burger_menu::after,
.burger_menu::before {
    content: "";
    display: block;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 20px;
    height: 2px;
    background: #BD0D22;
    transition: .3s;
}
.burger_menu::after {
    top: 15px;
}

.burger_list {
    display: none;
    position: fixed;

    width: 100%;
    height: 100%;

    left: 0;
    top: 0;
    z-index: 300;
    background: #fff;
    margin-top: 64px;

    transform: translateX(-400px);
    transition: translate .5s;
}

.burger_list_active {
    transform: translateX(0);
}

@media (max-width: 800px) {
    .flex_helper {
        display: block;
        width: 100%;
    }

    .sidebar {
        display: none;
    }

    .header {
        display: flex;
    }
    .content_profile {
        padding: 40px 17px;
        box-sizing: border-box;
    }
    .flex_inner {
        width: 100%;
    }
    
    
    
}

</style>