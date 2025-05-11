<?php

namespace App\Http\Controllers;

use App\Models\FeeVoucher;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Helpers\UploadHelper;

use App\Traits\ResponseTrait;

use Illuminate\Support\Facades\Log;

class FeeVoucherController extends Controller
{

    /**
     * Response trait to handle return responses.
     */
    use ResponseTrait;

    public function __construct()
    {
        //
    }

    public function index(Request $request): JsonResponse
    {
        try {

            $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
            $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
            $order   = isset($request['order']) ? $request['order'] : 'desc';
            $user_id   = ( isset($request['user_id']) && ! empty(isset($request['user_id'])) ) ? $request['user_id'] : '';
            $class_id   = ( isset($request['class_id']) && ! empty(isset($request['class_id'])) ) ? $request['class_id'] : '';
            $status   = ( isset($request['status']) && ! empty(isset($request['status'])) ) ? $request['status'] : '';
            
            $query = FeeVoucher::orderBy($orderBy, $order)
                ->with('author', 'user', 'tutor', 'class');

            if (! empty($user_id) ) {
                $query->where('user_id', $user_id);
            }

            if (! empty($class_id) ) {
                $query->where('class_id', $class_id);
            }    

            if (! empty($status) ) {
                $query->where('status', $status);
            }

            // get query final result
            $data = $query->paginate($perPage);    

            return $this->responseSuccess($data, 'Fee Vouchers List Fetch Successfully !');

        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    public function store(Request $request): JsonResponse
    {

        try {

            $request_data = $request->validate(
                [
                    'title'     => 'required|string|max:50',
                    'description'     => 'nullable|max:5000',
                    'amount'       => 'required|numeric',
                    'due_date' => 'required|date_format:Y-m-d',
                    'status'     => 'required|string|max:10',
                    'payment_proof_image_url'     => 'required|string',
                    'author_id'     => 'required|numeric',
                    'user_id'     => 'required|numeric',
                    'class_id'     => 'required|numeric',
                ],
                [
                    'title.required'     => 'Please provide title',
                    'title.max'          => 'Please make sure title length is upto 50 characters',
                    'description.max' => 'Please provide description maximum of 5000 characters',
                    'amount.required'     => 'Please provide amount id',
                    'amount.numeric'          => 'Please make sure amount is numeric value',
                    'due_date.required'    => 'Please the due date',
                    'due_date.date_format' => 'Please make sure your due-date is formatted as Y-m-d',
                    'status.required'     => 'Please provide status',
                    'status.max'          => 'Please make sure status length is upto 10 characters',
                    'payment_proof_image_url.required'         => 'Please provide the payment proof image url',
                    'author_id.required'     => 'Please provide author_id id',
                    'author_id.numeric'          => 'Please make sure author_id is numeric value',
                    'user_id.required'     => 'Please provide user id',
                    'user_id.numeric'          => 'Please make sure user id is numeric value',
                    'class_id.required'     => 'Please provide class id',
                    'class_id.numeric'          => 'Please make sure class id is numeric value',
                ]
            ); 

            $fee_voucher = FeeVoucher::create($request_data);

            $response_data = FeeVoucher::with('author', 'user', 'tutor', 'class')->find($fee_voucher->id);

            return $this->responseSuccess($response_data, 'New Fee Voucher Created Successfully !');

        } catch (\Exception $exception) {
            return $this->responseError(null, $exception->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        
    }

    public function show($id): JsonResponse
    {
       
        try {

            $data = FeeVoucher::with('author', 'user', 'tutor', 'class')->find($id);

            if (is_null($data)) {
                return $this->responseError(null, 'Fee Voucher Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'Fee Voucher Details Fetch Successfully !');

        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    public function update(Request $request, $id): JsonResponse
    {

        try {

            $request_data = $request->validate(
                [
                    'title'     => 'required|string|max:50',
                    'description'     => 'nullable|max:5000',
                    'amount'       => 'required|numeric',
                    'due_date' => 'required|date_format:Y-m-d',
                    'status'     => 'required|string|max:10',
                    'payment_proof_image_url'     => 'required|string',
                    'author_id'     => 'required|numeric',
                    'user_id'     => 'required|numeric',
                    'class_id'     => 'required|numeric',
                ],
                [
                    'title.required'     => 'Please provide title',
                    'title.max'          => 'Please make sure title length is upto 50 characters',
                    'description.max' => 'Please provide description maximum of 5000 characters',
                    'amount.required'     => 'Please provide amount id',
                    'amount.numeric'          => 'Please make sure amount is numeric value',
                    'due_date.required'    => 'Please the due date',
                    'due_date.date_format' => 'Please make sure your due-date is formatted as Y-m-d',
                    'status.required'     => 'Please provide status',
                    'status.max'          => 'Please make sure status length is upto 10 characters',
                    'payment_proof_image_url.required'         => 'Please provide the payment proof image url',
                    'author_id.required'     => 'Please provide author_id id',
                    'author_id.numeric'          => 'Please make sure author_id is numeric value',
                    'user_id.required'     => 'Please provide user id',
                    'user_id.numeric'          => 'Please make sure user id is numeric value',
                    'class_id.required'     => 'Please provide class id',
                    'class_id.numeric'          => 'Please make sure class id is numeric value',
                ]
            );

            $fee_voucher = FeeVoucher::find($id);

            if (is_null($fee_voucher)) {
                return null;
            }

            // If everything is OK, then update.
            $fee_voucher->update($request_data);

            $response_data = FeeVoucher::with('author', 'user', 'tutor', 'class')->find($fee_voucher->id);

            if (is_null($response_data)) {
                return $this->responseError(null, 'Fee Voucher Not Found', Response::HTTP_NOT_FOUND);
            }

            // Finally return the updated Class.
            return $this->responseSuccess($response_data, 'Fee Voucher Updated Successfully !');

        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    public function destroy($id): JsonResponse
    {

        try {

            $fee_voucher = FeeVoucher::find($id);

            if (empty($fee_voucher)) {
                return $this->responseError(null, 'Fee Voucher Not Found', Response::HTTP_NOT_FOUND);
            }

            $deleted = $fee_voucher->delete($fee_voucher);

            if ( ! $deleted) {
                return $this->responseError(null, 'Failed to delete the Fee Voucher.', Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            return $this->responseSuccess($fee_voucher, 'Fee Voucher Deleted Successfully !');

        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        
    }

}