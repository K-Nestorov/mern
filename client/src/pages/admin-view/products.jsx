import { useState, Fragment } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import CommonForm from "@/components/common/form";
import { addProductFormElements } from "@/config";
import ProductImageUpload from "@/components/admin-view/image.-upload";

const initialFormData = {
    image: null,
    title: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    salePrice: '',
    totalStock: '',
};

function AdminProducts() {
    const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
    const [formData, setFormData] = useState(initialFormData); // Corrected spelling of initialFormData
const [imageFile,setImageFile]=useState(null);
const [uploadedImageUrl,setUploadedImgUrl]=useState('');
const [imageLoadingState,setImageLoadingState]=useState(false);
    function onSubmit() {
        // Add form submission logic here
        console.log('Form Submitted', formData);
    }

    return (
        <Fragment>
            <div className="mb-5 w-full flex justify-end">
                <Button onClick={() => setOpenCreateProductsDialog(true)}>Add new Product</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                <Sheet open={openCreateProductsDialog} onOpenChange={() => setOpenCreateProductsDialog(false)}>
                    <SheetContent side="right" className="overflow-auto">
                        <SheetHeader>
                            <SheetTitle>Add new Product</SheetTitle>
                       <ProductImageUpload file={imageFile} 
                       setImageFile={setImageFile}
                       uploadedImageUrl={uploadedImageUrl}
                       setUploadedImgUrl={setUploadedImgUrl}
                       setImageLoadingState={setImageLoadingState}
                       
                       />
                        </SheetHeader>
                        <div className="py-6">
                            <CommonForm 
                                onSubmit={onSubmit}
                                formData={formData}
                                setFormData={setFormData}
                                buttonText="Add"
                                formControls={addProductFormElements}
                            />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </Fragment>
    );
}

export default AdminProducts;
