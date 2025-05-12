import { Button, Popconfirm } from 'antd';
import { QuestionCircleOutlined, FileProtectOutlined } from '@ant-design/icons';
import { request } from '@umijs/max';

const GenerateFeeVoucher = ( { rowId, onFinish } ) => {
	return (
		<Popconfirm
			title="Generate the Fee Voucher"
			description="Are you sure you want to generate this Fee Voucher?"
			icon={ <QuestionCircleOutlined style={ { color: 'red' } } /> }
			placement="left"
			// onConfirm={ async () => {
			// 	return await request('/api/fee-vouchers/' + rowId, {

			// 		method: 'DELETE',

			// 	} ).then( ( response ) => {

			// 		if ( response.status === true ) {
			// 			onFinish( {
			// 				status: true,
			// 				text_message: 'Fee Voucher generated successfully',
			// 			} );
			// 		} else {
			// 			onFinish( {
			// 				status: false,
			// 				text_message:
			// 					'Failed to generate Fee Voucher: Invalid response',
			// 			} );
			// 		}
			// 	} );
			// } }
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
