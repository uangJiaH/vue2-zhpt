export const columns = [
    {
        label: '序号',
        prop: 'id',
        align: 'center',
        width: 50
    },
    {
        label: '用户名',
        prop: 'username',
        width: 80
    },
    {
        label: '头像',
        slot: 'avatar',
        align: 'center',
        width: 100
    },
    {
        label: '角色',
        slot: 'roles',
        align: 'center',
        width: 150
    },
    {
        label: '邮箱',
        prop: 'email',
        width: 170
    },
    {
        label: '注册时间',
        prop: 'createTime',
        width: 160
    },
    {
        label: '状态',
        slot: 'status',
        width: 80
    },
    {
        label: '操作',
        slot: 'operating',
        align: 'center',

    }
]
