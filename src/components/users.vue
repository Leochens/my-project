<template>
	<div class="users">
		<h3>users用户信息</h3>
		<!--添加用户信息-->
		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="enter name"><br>
			<input type="text" v-model="newUser.email" placeholder="enter name"><br>
			<input type="text" v-model="newUser.name" placeholder="enter name"><br>
			<input type="submit" value="Submit">
		</form>
		<ul>
			<li v-for="user in users">
			<!--添加删除线 -->	
			<input type="checkbox" class="toggle" v-model="user.contacted">
			<span :class="{contacted_style:user.contacted}"> 	{{user.name+' : '+user.email}}
			<!--删除用户-->
			<button  v-on:click="deleteUser(user)">X</button></span>
		</li>
		</ul>
		<button v-on:click="deleteAll()">deleteAll</button>

	</div>
	
	
</template>
<script type="text/javascript">
export default{	//对外发布
	name:"users",
	data(){
		return {
			users:[
			{
				name:'张鹤麟',
				email:'1183422598@qq.com',
				contacted:false		
			},
			{
				name:'李四',
				email:'1183422598@qq.com',
				contacted:false		
			},	
			{
				name:'张三',
				email:'1183422598@qq.com',
				contacted:false		
			},					
			],
			newUser:{
				name:'默认姓名',
				email:'anybody@something.com'
			}
		}
	},
	methods:{
		addUser:function(e){
			
			this.users.push({
				name:this.newUser.name,
				email:this.newUser.email,
				contacted:false
			});
			e.preventDefault();	//防止闪一下
},
		deleteUser:function(user){
			//alert("tgsi");
			this.users.splice(this.users.indexOf(user),1);/*删除长度为1*/
		},
		deleteAll:function()
		{
			this.users.splice(this.user);
		}
		
	}
}

</script>

<style scoped >
	.contacted_style{
		text-decoration: line-through;
	}


</style>