<template>
<div class="layout">
	<Layout style="height: 100%;">
		<Header style="background: #272A34;height: 60px;">
			<Menu style="width: 1170px;margin:0 auto;" mode="horizontal" theme="dark" @on-select="changeRoure" :active-name="$route.name">
				<div class="layout-logo">
					<img src="@/assets/xiaodinglogo.png" alt="">
				</div>
				<div class="layout-nav">
					<MenuItem name="home">
					<!-- <Icon type="ios-navigate"></Icon> -->
					我的发布
					</MenuItem>
					<MenuItem name="myTask">
					<!-- <Icon type="ios-keypad"></Icon> -->
					我的任务
					</MenuItem>
					<MenuItem name="myCc">
					<!-- <Icon type="ios-analytics"></Icon> -->
					我的抄送
					</MenuItem>
<!--                     <MenuItem name="publicTemp">
					<Icon type="ios-paper"></Icon>
					公共模板
					</MenuItem> -->

					<MenuItem name="editor">
					<!-- <Icon type="ios-paper"></Icon> -->
						<button class="add-cls">新建任务</button>
						<!-- <button class="add-cls disabled-cls" v-if="!$route.meta.disableds" disabled>正在编辑</button>     -->
					</MenuItem>
				</div>
			</Menu>
		</Header>
		<Content :style="{height: '100%',background: '#F1F1F1'}">
			<Modal v-model="modalStatus"  :title="madalTitle" footer-hide @on-cancel="cancelModal()">
				<component v-bind:is="currentView"></component>
			</Modal>
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</Content>
		<!-- <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer> -->
	</Layout>
</div>
</template>

<script>
import SubmitList from '_c/submitList'
export default {
	components: {
		SubmitList
	},
	data() {
		return {
			madalTitle: '',
			modalStatus: false,
			currentView: 'Input'
		}
	},
	created(){
		// console.log(this.$api.sGetObject("userObj"))
		if(!this.$api.sGetObject("userObj")){
			let objectid=this.$route.query.objectid;
			let userId=this.$route.query.userId;
			let objType=this.$route.query.objType;
			this.$api.sSetObject("userObj",{
				userId:userId,
				objType:objType,
				openAppID:"315492154052",
				objectid:objectid
			})
		}

	},
	mounted(){

	},
	methods: {
		changeRoure(name) {
			this.$router.push({
				name
			})
		},
		cancelModal() {
			let cur_modal = this.$store.state.modal
			cur_modal.curtime = new Date().getTime()
			cur_modal.status = false
			cur_modal.component = 'Input'
			this.$store.commit('modalStatus', cur_modal)
		}
	},
	computed: {
		getModal () {
			return this.$store.state.modal.curtime
		}
	},
	watch: {
		getModal () {
			this.modalStatus = this.$store.state.modal.status
			this.currentView = this.$store.state.modal.component
			this.madalTitle = this.$store.state.modal.title
		}
	}
}
</script>

<style lang="less" scoped>
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu{
	color: #8195AD;
}
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover{
	color:#fff;
}
.ivu-menu-item{
	font-size: 16px;
}
.layout {
	height: 100%;
	border: 1px solid #d7dde4;
	background: #f5f7f9;
	position: relative;
	border-radius: 4px;
	overflow: hidden;
}

.layout-logo {
	width: 100px;
	height: 33px;
	// background: #5b6270;
	border-radius: 3px;
	float: left;
	position: relative;
	top: 13px;
	left: 20px;
}

.layout-nav {
	// width: 70%;
	margin: 0 auto;
	float: left;
	margin-left: 80px;
}

.layout-footer-center {
	text-align: center;
}

.logoText {
	color: #fff;
}

.ivu-menu-dark {
	background: transparent
}
.add-cls{
	background: #5DB75D;
	border: 1px solid #5DB75D;
	border-radius: 1px;
	font-family: PingFang-SC-Medium;
	color: #FFFFFF;
	letter-spacing: 0.84px;
	width: 104px;
	height: 33px;
	line-height: 33px;
	margin-top: 13px;
	outline: none;
	cursor: pointer;
}
.disabled-cls{
	background: #8195AD;
	border: 1px solid #8195AD;
	color: #FFFFFF;
}
</style>
