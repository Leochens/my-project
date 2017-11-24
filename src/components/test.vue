
<template>
	<div>
		<!--<h1>test</h1>-->
		<!--1-->
		<h1>{{title}}</h1><!--模板绑定-->
		<h1>{{user.name+user.age}}</h1>
		<!--3 命令绑定-->
		<p v-text="user.age"></p>


		<!--v-if-->

		<p v-if="flag">{{user.name}}</p>
		<p v-else>this</p>

		<!--v-for-->
		<ul>
			<li v-for="item in items">{{item.title}}</li>
		</ul>
		<!--v-on-->
	<button v-on:click="hello('hahaha')">Say Hello</button>	
	<!--键盘事件-->
	<input type="text" v-on:keyup="pressd()" v-on:keyup.enter="enter_()" id="">
	<input type="text" v-on:keyup="pressd()" v-on:keyup.enter.alt="enter_alt()" id="">
	<input type="text" v-on:keyup="pressd()" v-on:keyup.enter.ctrl.z="enter_alt()" id="">
	
	<!--computed 计算属性-->
	<hr>
	<label for="">ZHL</label><br>
	<input type="text" v-model="user.name"><br>
	<input type="text" v-model="user.age"><br>
	<input type="text" v-model="user.sex"><br>
	<h5>{{fullzhl}}</h5>

	<!--props 属性-->
	<h2>{{msg}}</h2>

	</div>
	
	
</template>
<script type="text/javascript">
export default{	//对外发布
	name:"test",
	props:{
		msg:{
			type:String,
			default:"默认文字"
		}	
	},
	data(){
		return {
			title:"hello Vue.js",
			user:{
				name:"张鹤麟",
				age:"22",
				sex:"nan"
			},
			flag:false,
			items:[
				{title:'item1'},
				{title:'item2'},
				{title:'item3'},
				{title:'item4'},
				{title:'item5'},
			]
		}
	},
	methods:{
		hello:function(e){
			alert(e)
		},
		pressd:function(){
			console.log("key pressed...")
		},
		enter_:function()
		{
			alert('enter')
		},
		enter_alt:function()
		{
			alert('enter alt');
		}			
	},
	computed:{
		fullzhl:function(){
			return this.user.name+' '+this.user.age+' '+this.user.sex;
		}
	}
}

</script>

<style scoped >
	


</style>