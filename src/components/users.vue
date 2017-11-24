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
			<li v-for="user in users">{{user.name+' '+user.email}}</li>
		</ul>
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


		}
	}
}

</script>

<style scoped >
	


</style>