import React, {useState} from "react";
import {Card, Empty, Flex, FormProps, message, Skeleton} from "antd";
import {Domain, getDomain} from "../../utils/api";
import {AxiosError} from "axios"
import {t} from 'ttag'
import {DomainSearchBar, FieldType} from "../../components/search/DomainSearchBar";
import {showErrorAPI} from "../../utils";
import {DomainResult} from "../../components/search/DomainResult";

export default function DomainSearchPage() {
    const [domain, setDomain] = useState<Domain | null>()
    const [messageApi, contextHolder] = message.useMessage()

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        setDomain(null)
        getDomain(values.ldhName).then(d => {
            setDomain(d)
            messageApi.success(t`Found !`)
        }).catch((e: AxiosError) => {
            setDomain(undefined)
            showErrorAPI(e, messageApi)
        })
    }

    return <Flex gap="middle" align="center" justify="center" vertical>
        <Card title={t`Domain finder`} style={{width: '100%'}}>
            {contextHolder}
            <DomainSearchBar onFinish={onFinish}/>

            <Skeleton loading={domain === null} active>
                {
                    domain &&
                    (!domain.deleted ? <DomainResult domain={domain}/>
                        : <Empty
                            description={t`Although the domain exists in my database, it has been deleted from the WHOIS by its registrar.`}/>)
                }
            </Skeleton>
        </Card>
    </Flex>
}