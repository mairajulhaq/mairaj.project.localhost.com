import { Button, Popconfirm } from 'antd';
import { QuestionCircleOutlined, FileProtectOutlined } from '@ant-design/icons';
import { request } from '@umijs/max';
import { useEffect, useState } from "react";

const GenerateFeeVoucher = ( { rowId, onFinish, userData, categoryId } ) => {

	const [ categoryTitle, setCategoryTitle ] = useState( [] );

	/**
     * Start - Category Data
     */
    useEffect( () => {
        return request('/api/categories' + categoryId, {
			method: 'GET',
        }).then( ( api_response ) => {
            // const table_data = api_response.data.data.map( ( item, i ) => ( {
            //     value: item?.id,
            //     label: item?.title,
            // } ) );
        
            setCategoryTitle( api_response?.data?.title );

            // console.log('table_data');
            // console.log(table_data);
        
            // return table_data;
        } );
    }, [] );

	return (
		<Popconfirm
			title="Generate the Fee Voucher"
			description="Are you sure you want to generate this Fee Voucher?"
			icon={ <QuestionCircleOutlined style={ { color: 'red' } } /> }
			placement="left"
			onConfirm={ async () => {

				const request_data = {
					title: 'Fee Voucher - user:' + userData?.name + '- Category:' + categoryTitle,
					// description: values?.description,
					// status: values?.status,
					// author_id: authorId,
					// category_id: values?.category_id,
					// users: values?.users?.map( ( user ) => user?.user ) || [],
				};

				console.log('request_data');
				console.log(request_data);

				// return await request('/api/fee-vouchers/' + rowId, {

				// 	method: 'DELETE',

				// } ).then( ( response ) => {

				// 	if ( response.status === true ) {
				// 		onFinish( {
				// 			status: true,
				// 			text_message: 'Fee Voucher generated successfully',
				// 		} );
				// 	} else {
				// 		onFinish( {
				// 			status: false,
				// 			text_message:
				// 				'Failed to generate Fee Voucher: Invalid response',
				// 		} );
				// 	}
				// } );
			} }
			okText="Yes"
			cancelText="No"
		>
			<Button key="generate_fee_voucher">
				<FileProtectOutlined /> Generate Fee Voucher
			</Button>
		</Popconfirm>
	);
};
export default GenerateFeeVoucher;
