<template>
	<div>

		<el-col :span="12">
            <!--<div class="grid-content bg-purple" >排行榜{{id}}</div>-->
            <div class="top-item">
                <div><img :src="topdata.coverImgUrl" class="cover"/></div>


                <div class="right">
                    <div v-for="(item,index) in topdata.tracks.slice(0,3)">
                        <div :key="index" >{{index+1}}  {{item.name}} <span class="gray">- {{item.ar[0].name}}</span></div>
                    </div>

                </div>

            </div>


        </el-col>

	</div>
</template>
<script>
import { toplist } from "../../../../api";
export default{
	props:{
		id:Number,
	},
	data(){
		return{
            topdata:{}

		}
	},
	mounted() {
		console.log('----id=',this.id)
        this.getToplist(this.id)
    },
	methods:{
		getToplist(id){
			toplist(id).then(res=>{
//				console.log('---toplist ',id,res)
                this.topdata=res.playlist
			})
		}

	}
}
</script>
<style lang="scss" scoped>
    .top-item{
        display: flex;
        margin-bottom:20px;
        background:#f0f0f0;

        .cover{
            width:127px;
            height:auto;
        }
        .right{
            padding: 15px;
            line-height: 2;
            font-size: 14px;
            .gray{
                color: #666;
            }
        }
    }

</style>