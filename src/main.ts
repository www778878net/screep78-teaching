
import { sayHello } from './menu/test'
import { errorMapper } from './modules/errorMapper'
 


 
 //sourcecreepnum 每个source有多少creep 应该没啥用 新策略就弃了
//sourcebusynum source空闲程度
declare global {
    var tick: number;//每N个TIck执行一次
    var mine: any;//我的数据
    var mine9: any;//我的数据
    var test: any;
   
    //var Memory: any;
}
export { };

export const loop = errorMapper(() => {

    sayHello();
   
    
})