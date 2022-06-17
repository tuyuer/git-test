
export declare interface IObject {
    /**
     * 程序运行时实例的唯一标识。
     */
    readonly instanceId: number;
}

export declare interface ILocalId {
    /**
     *
     */
    readonly localId: string;
}

export declare interface IComponent extends ILocalId, IObject{

} 

export declare interface ITest extends IComponent{
    version: number;
} 