
import { sayHello } from './menu/test'
import { errorMapper } from './modules/errorMapper'
 


 
 //sourcecreepnum ÿ��source�ж���creep Ӧ��ûɶ�� �²��Ծ�����
//sourcebusynum source���г̶�
declare global {
    var tick: number;//ÿN��TIckִ��һ��
    var mine: any;//�ҵ�����
    var mine9: any;//�ҵ�����
    var test: any;
   
    //var Memory: any;
}
export { };

export const loop = errorMapper(() => {

    sayHello();
   
    
})