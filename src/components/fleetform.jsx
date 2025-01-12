/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast, Slide } from "react-toastify";
import { fleetForm } from "./api";
import { OfflineContext } from "../contextApi/offline_context";
import useOnlineStatus from "../custom_hook/useOffline";

const FleetForm = () => {
  const isOnline = useOnlineStatus();
  const { addToOffline } = useContext(OfflineContext);
  const form = useForm({
    defaultValues: {
      sub_1_1: "",
      sub_1_2: "",
      sub_1_3: "",
      sub_1_4: "",
      sub_1_5: "",
      sub_1_6: "",
      sub_1_7: "",
      sub_1_8: "",
      sub_1_9: "",
      sub_1_10: "",
      sub_1_11: "",
    },
  });

  const { register, handleSubmit, reset, formState } = form;
  const { isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = async (data) => {

      try {

        const {sub_1_1, sub_1_2, sub_1_3, sub_1_4, sub_1_5} = data;
        if(sub_1_1 === "" || sub_1_2 === "" || sub_1_3 === "" || sub_1_4 === "" || sub_1_5 === "") {
          event.preventDefault()
          toast.error("Please fill in all the required fields!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
        }else{
          const response = await fleetForm(data);
          console.log(response);
          if (response) {
            const MySwal = withReactContent(Swal);
            MySwal.fire({
              html: <i>Your data has been submitted successfully!</i>,
              icon: "success",
            });
          }
        }

      } catch (err) {
        console.log(err);
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          html: <i>{err.message}</i>,
          icon: "error",
        });
      }

  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div className="main_body">
        <div className="row parcel_form">
          <form
            className="form"
            id="form"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >

           <h1>General Information</h1>

<div className="input-field col s12">
  <span>1. Date</span>
  <br />
  <input id="sub_1_1" name="sub_1_1" placeholder="Date" type="date"  {...register("sub_1_1")}/>
</div>

<div className="input-field col s12">
  <span>2. Region</span>
  <br />
  <input id="sub_1_2" name="sub_1_2" placeholder="Region" type="text" {...register("sub_1_2")}/>
</div>

<div className="input-field col s12">
  <span>3. Park Name/Location</span>
  <br />
  <input id="sub_1_3" name="sub_1_3" placeholder="Park Name/Location" type="text" {...register("sub_1_3")}/>
</div>

<div className="input-field col s12">
  <span>4. Team Members Present (Technicians & Supervisor)</span>
  <br/>
  <input id="sub_1_4" name="sub_1_4" placeholder="Enter your answer" type="text" {...register("sub_1_4")}/>
</div>

<h1>Riders Information</h1>

<div className="input-field col s12">
  <span>1. Rider Name</span>
  <br />
  <input id="sub_1_5" name="sub_1_5" placeholder="Rider Name" type="text"  {...register("sub_1_5")}/>

</div>


<div className="input-field col s12">
  <span>2. Contact Number</span>
  <br />
  <input id="sub_1_6" name="sub_1_6" placeholder="Contact Number" type="text" {...register("sub_1_6")}/>
</div>


<div className="input-field col s12">
  <span>3. Motorcycle Model</span>
  <br />
  <input id="sub_1_7" name="sub_1_7" placeholder="Motorcycle Model" type="text" {...register("sub_1_7")}/>
</div>

<div className="input-field col s12">
  <span>4. Chasis Number</span>
  <br />
  <input id="sub_1_8" name="sub_1_8" placeholder="Chasis Number" type="text" {...register("sub_1_8")}/>
</div>

<div className="input-field col s12">
  <span>5. Engine Number </span>
  <br />
  <input id="sub_1_9" name="sub_1_9" placeholder="Engine Number" type="text"  {...register("sub_1_9")}/>
</div>

<div className="input-field col s12">
  <span>6. KMS Run/Mileage </span>
  <br />
  <input id="sub_1_10" name="sub_1_10" placeholder="KMS Run/Mileage" type="text" {...register("sub_1_10")}/>
</div>

<div className="input-field col s12">
  <span>7. Age of Motorcycle (Months/Years)</span>
  <br />
  <input id="sub_1_11" name="sub_1_11" placeholder="Age of Motorcycle" type="text" {...register("sub_1_11")}/>
</div>

<h1>Service Metrics</h1>
<div className="input-field col s12">
  <span>1. Types of Repairs Performed</span>
  <br />
  <input id="sub_1_12" name="sub_1_12" placeholder="Types of Repairs Performed" type="text" {...register("sub_1_12")}/>
</div>
 <h1>Job Card Details </h1>
 <div className="input-field col s12">
  <span>1. Job Card Number </span>
  <br />
  <input id="sub_1_13" name="sub_1_13" placeholder="Job Card Number" type="text" {...register("sub_1_13")}/>
</div>

 <div className="input-field col s12">
  <span>2. Job Card Date</span>
  <br />
  <input id="sub_1_14" name="sub_1_14" placeholder="Job Card Date" type="date" {...register("sub_1_14")}/>
</div>

 <h1>Service Details</h1>
 <div className="input-field col s12">
  <span>1. Check Venue / Name Service Station</span>
  <br />
  <input id="sub_1_14" name="sub_1_14" placeholder="Check Venue / Name Service Station" type="text" {...register("sub_1_14")}/>
</div>

 <div className="input-field col s12">
  <span>3. Type of Service</span>
  <br />
  <input id="sub_1_15" name="sub_1_15" placeholder="e.g., 10-point check, warranty repair, etc" type="text" {...register("sub_1_15")}/>
</div>

 <div className="input-field col s12">
  <span>4. Technician Name</span>
  <br />
  <input id="sub_1_16" name="sub_1_16" placeholder="Technician Name" type="text" {...register("sub_1_16")}/>
</div>


<h1>10-Point Check Outcomes</h1>

<div className="input-field col s12">
  <span>1a. Status - Air Filter Check up & Cleaning</span>
  <br />
<select className="select_els" name="sub_1_17" id="sub_1_17"  style={{ display: "block" }}  {...register("sub_1_17")}>
<option value="">Select your answer</option>
<option id="" value="PASS">PASS</option>
<option id="" value="FAIL">FAIL</option>
</select>
</div>

<div className="input-field col s12">
  <span>1b. Point Check Remarks</span>
  <br />
  <input id="sub_1_18" name="sub_1_18" placeholder="Point Check Remarks" type="text"  {...register("sub_1_18")}/>
</div>

<div className="input-field col s12">
  <span>2a. Status - Cables Adjustment (Accelerator & Clutch)</span>
  <br />
  <select className="select_els" name="sub_1_19" id="sub_1_19"  style={{ display: "block" }}  {...register("sub_1_19")}>
<option value="">Select your answer</option>
<option id="" value="PASS">PASS</option>
<option id="" value="FAIL">FAIL</option>
</select>
</div>

<div className="input-field col s12">
  <span>2b. Point Check Remarks</span>
  <br />
  <input id="sub_1_20" name="sub_1_20" placeholder="Point Check Remarks" type="text"  {...register("sub_1_20")}/>
</div>

<div className="input-field col s12">
  <span>3a. Status - Spark plug cleaning , Gap Adjustment & HT Cables Inspection </span>
  <br />
  <select className="select_els" name="sub_1_21" id="sub_1_21"  style={{ display: "block" }}  {...register("sub_1_21")}>
<option value="">Select your answer</option>
<option id="" value="PASS">PASS</option>
<option id="" value="FAIL">FAIL</option>
</select>
</div>

<div className="input-field col s12">
  <span>3b. Point Check Remarks</span>
  <br />
  <input id="sub_1_22" name="sub_1_22" placeholder="Point Check Remarks" type="text"  {...register("sub_1_22")}/>
</div>

<div className="input-field col s12">
  <span>4a. Status - Rubber boot fitment on Acceleration & Choke. Check & Adjust </span>
  <br />
  <select className="select_els" name="sub_1_23" id="sub_1_23"  style={{ display: "block" }}  {...register("sub_1_23")}>
<option value="">Select your answer</option>
<option id="" value="PASS">PASS</option>
<option id="" value="FAIL">FAIL</option>
</select>
</div>

<div className="input-field col s12">
  <span>4b. Point Check Remarks</span>
  <br />
  <input id="sub_1_24" name="sub_1_24" placeholder="Point Check Remarks" type="text"  {...register("sub_1_24")}/>
</div>

<div className="input-field col s12">
  <span>5a.  Status - Check & Adjust Brake Front & Rear</span>
  <br />
  <select className="select_els" name="sub_1_25" id="sub_1_25"  style={{ display: "block" }}  {...register("sub_1_25")}>
<option value="">Select your answer</option>
<option id="" value="PASS">PASS</option>
<option id="" value="FAIL">FAIL</option>
</select>
</div>

<div className="input-field col s12">
  <span>5b. Point Check Remarks</span>
  <br />
  <input id="sub_1_26" name="sub_1_26" placeholder="Point Check Remarks" type="text"  {...register("sub_1_26")}/>
</div>

<div className="input-field col s12">
  <span>6. Status - Check & Change Battery Voltage (if Voltage is less than 2.4 V put in Charge )</span>
  <br />
  <select className="select_els" name="sub_1_27" id="sub_1_27"  style={{ display: "block" }}  {...register("sub_1_27")}>
<option value="">Select your answer</option>
<option id="" value="PASS">PASS</option>
<option id="" value="FAIL">FAIL</option>
</select>
</div>

<div className="input-field col s12">
  <span>6b. Point Check Remarks</span>
  <br />
  <input id="sub_1_28" name="sub_1_28" placeholder="Point Check Remarks" type="text"  {...register("sub_1_28")}/>
</div>

<div className="input-field col s12">
  <span>7a.  Status - Tyre Pressure Check & Adjust</span>
  <br />
  <select className="select_els" name="sub_1_29" id="sub_1_29"  style={{ display: "block" }}  {...register("sub_1_29")}>
<option value="">Select your answer</option>
<option id="" value="PASS">PASS</option>
<option id="" value="FAIL">FAIL</option>
</select>
</div>

<div className="input-field col s12">
  <span>7b. Point Check Remarks</span>
  <br />
  <input id="sub_1_30" name="sub_1_30" placeholder="Point Check Remarks" type="text"  {...register("sub_1_30")}/>
</div>

<div className="input-field col s12">
  <span>8a. Status - Electrical check up - Bulbs & Switches</span>
  <br />
  <select className="select_els" name="sub_1_31" id="sub_1_31"  style={{ display: "block" }}  {...register("sub_1_31")}>
<option value="">Select your answer</option>
<option id="" value="PASS">PASS</option>
<option id="" value="FAIL">FAIL</option>
</select>
</div>

<div className="input-field col s12">
  <span>8b. Point Check Remarks</span>
  <br />
  <input id="sub_1_32" name="sub_1_32" placeholder="Point Check Remarks" type="text"  {...register("sub_1_32")}/>
</div>

<div className="input-field col s12">
  <span>9a.  Status - Check the Rear Shock absorbers Setting should be in 3rd Notch</span>
  <br />
  <select className="select_els" name="sub_1_33" id="sub_1_33"  style={{ display: "block" }}  {...register("sub_1_33")}>
<option value="">Select your answer</option>
<option id="" value="PASS">PASS</option>
<option id="" value="FAIL">FAIL</option>
</select>
</div>

<div className="input-field col s12">
  <span>9b. Point Check Remarks</span>
  <br />
  <input id="sub_1_34" name="sub_1_34" placeholder="Point Check Remarks" type="text"  {...register("sub_1_34")}/>
</div>

<h1>Follow Up post service </h1>
<div className="input-field col s12">
  <span>1. Fleet Owner </span>
  <br />
  <input id="sub_1_35" name="sub_1_35" placeholder=" Fleet Owner" type="text"  {...register("sub_1_35")}/>
</div>

<div className="input-field col s12">
  <span>2. Contact Number </span>
  <br />
  <input id="sub_1_36" name="sub_1_36" placeholder="Contact Number" type="text"  {...register("sub_1_36")}/>
</div>

<div className="input-field col s12">
  <span>3. Chasis Number</span>
  <br />
  <input id="sub_1_37" name="sub_1_37" placeholder="Chasis Number" type="text"  {...register("sub_1_37")}/>
</div>

<div className="input-field col s12">
  <span>4. Engine Number</span>
  <br />
  <input id="sub_1_38" name="sub_1_38" placeholder="Engine Number" type="text"  {...register("sub_1_38")}/>
</div>

<div className="input-field col s12">
  <span>5. Next Service Due Date </span>
  <br />
  <input id="sub_1_39" name="sub_1_39" placeholder="Next Service Due Date" type="text"  {...register("sub_1_39")}/>
</div>

<h1>Spare Parts Information</h1>
<div className="input-field col s12">
  <span>1. Parts Sold</span>
  <br />
  <input id="sub_1_40" name="sub_1_40" placeholder="SKU/Part Name" type="text"  {...register("sub_1_40")}/>
</div>

<div className="input-field col s12">
  <span>2. Quantity Sold</span>
  <br />
  <input id="sub_1_41" name="sub_1_41" placeholder="Quantity Sold" type="text"  {...register("sub_1_41")}/>
</div>

<div className="input-field col s12">
  <span>3. Price </span>
  <br />
  <input id="sub_1_42" name="sub_1_42" placeholder="TZS." type="text"  {...register("sub_1_42")}/>
</div>

<div className="input-field col s12">
  <span>4. F.O. Name</span>
  <br />
  <input id="sub_1_43" name="sub_1_43" placeholder="TZS." type="text"  {...register("sub_1_43")}/>
</div>

<div className="input-field col s12">
  <span>5. Date of Sale </span>
  <br />
  <input id="sub_1_44" name="sub_1_44" placeholder="Date of Sale" type="date"  {...register("sub_1_44")}/>
</div>

<div className="input-field col s12">
  <span>6. Spare Part Availability Feedback</span>
  <br />
  <select className="select_els" name="sub_1_45" id="sub_1_45"  style={{ display: "block" }}  {...register("sub_1_45")}>
   <option value="">Select your answer</option>
   <option id="" value="High">High</option>
   <option id="" value="Moderate">Moderate</option>
   <option id="" value="low">Low</option>
  </select>
</div>

<div className="input-field col s12">
              <span>7. Affordability Feedback</span>
              <br />
              <select className="select_els" name="sub_1_46" id="sub_1_46"  style={{ display: "block" }}  {...register("sub_1_46")}>
            <option value="">Select your answer</option>
            <option id="" value="Affordable">Affordable</option>
            <option id="" value="Expensive">Expensive</option>
            </select>
            </div>

            <h1>Warranty Activation and Repairs</h1>
            <div className="input-field col s12">
              <span>1. Warranty Activation</span>
              <br />
              <select className="select_els" name="sub_1_47" id="sub_1_47"  style={{ display: "block" }}  {...register("sub_1_47")}>
            <option value="">Select your answer</option>
            <option id="" value="yes">Yes</option>
            <option id="" value="no">No</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>2. Date of Warranty Activation</span>
              <br />
              <input id="sub_1_48" name="sub_1_48" placeholder="Date of Warranty Activation" type="text"  {...register("sub_1_48")}/>
            </div>

            <div className="input-field col s12">
              <span>3. Type of Warranty Repair (if applicable)</span>
              <br />
              <input id="sub_1_49" name="sub_1_49" placeholder="Type of warranty repair" type="text"  {...register("sub_1_49")}/>
            </div>

            <div className="input-field col s12">
              <span>4. Cost (if any)</span>
              <br />
              <input id="sub_1_50" name="sub_1_50" placeholder="TZS" type="text"  {...register("sub_1_50")}/>
            </div>

            <h1>Education and Awareness</h1>
            <div className="input-field col s12">
              <span>1. Education on Warranty Provided</span>
              <br />
              <select className="select_els" name="sub_1_51" id="sub_1_51"  style={{ display: "block" }}  {...register("sub_1_51")}>
            <option value="">Select your answer</option>
            <option id="" value="yes">Yes</option>
            <option id="" value="no">No</option>
            </select>
            </div>


            <div className="input-field col s12">
              <span>2. Rider’s Knowledge Level Post-Education </span>
              <br />
              <select className="select_els" name="sub_1_52" id="sub_1_52"  style={{ display: "block" }}  {...register("sub_1_52")}>
            <option value="">Select your answer</option>
            <option id="" value="Excellent">Excellent</option>
            <option id="" value="Good">Good</option>
            <option id="" value="Fair">Fair</option>
            <option id="" value="Poor">Poor</option>
            </select>
            </div>

            <h1>Rider Feedback on Service</h1>
            <div className="input-field col s12">
              <span>1. Service Satisfaction Rating</span>
              <br />
              <select className="select_els" name="sub_1_53" id="sub_1_53"  style={{ display: "block" }}  {...register("sub_1_53")}>
            <option value="">Select your answer</option>
            <option id="" value="1">1</option>
            <option id="" value="2">2</option>
            <option id="" value="3">3</option>
            <option id="" value="4">4</option>
            <option id="" value="5">5</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>2. Comments/Concerns</span>
              <br />
              <input id="sub_1_54" name="sub_1_54" placeholder="Comments" type="text"  {...register("sub_1_54")}/>
            </div>

            <div className="input-field col s12">
              <span>3. Suggestions for Improvement</span>
              <br />
              <input id="sub_1_55" name="sub_1_55" placeholder="Suggestions for Improvement" type="text"  {...register("sub_1_55")}/>
            </div>


            <div className="input-field col s12">
              <span>4. Engagement Activities</span>
              <br />
              <input id="sub_1_56" name="sub_1_56" placeholder="Demo, Q&A, etc." type="text"  {...register("sub_1_56")}/>
            </div>

            <div className="input-field col s12">
              <span>5. Rider’s Perception of Brand Visibility</span>
              <br />
              <select className="select_els" name="sub_1_57" id="sub_1_57"  style={{ display: "block" }}  {...register("sub_1_57")}>
            <option value="">Select your answer</option>
            <option id="" value="High">High</option>
            <option id="" value="Moderate">Moderate</option>
            <option id="" value="Low">Low</option>

            </select>
            </div>

            <div className="input-field col s12">
              <span>6. Rider’s Willingness to Recommend</span>
              <br />
              <select className="select_els" name="sub_1_58" id="sub_1_58"  style={{ display: "block" }}  {...register("sub_1_58")}>
            <option value="">Select your answer</option>
            <option id="" value="Yes">Yes</option>
            <option id="" value="No">No</option>
            </select>
            </div>

           <h1>Awareness Metrics</h1>
           <div className="input-field col s12">
              <span>1. Rider Feedback (Key Comments)</span>
              <br />
              <input id="sub_1_59" name="sub_1_59" placeholder="Rider Feedback (Key Comments)" type="text"  {...register("sub_1_59")}/>
            </div>

            <h1>Brand Education</h1>

            <div className="input-field col s12">
              <span>1. Rider Educated on Maintenance Schedule</span>
              <br />
              <select className="select_els" name="sub_1_60" id="sub_1_60"  style={{ display: "block" }}  {...register("sub_1_60")}>
            <option value="">Select your answer</option>
            <option id="" value="Yes">Yes</option>
            <option id="" value="No">No</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>2. Rider Engaged for Bike Care Education</span>
              <br />
              <select className="select_els" name="sub_1_61" id="sub_1_61"  style={{ display: "block" }}  {...register("sub_1_60")}>
            <option value="">Select your answer</option>
            <option id="" value="Yes">Yes</option>
            <option id="" value="No">No</option>
            </select>
            </div>

            <h1>Challenges and Recommendations</h1>
            <div className="input-field col s12">
              <span>1. Challenges Faced</span>
              <br />
              <input id="sub_1_62" name="sub_1_62" placeholder="Challenges Faced" type="text"  {...register("sub_1_62")}/>
            </div>

            <div className="input-field col s12">
              <span>2. Recommendations for Improvement</span>
              <br />
              <input id="sub_1_63" name="sub_1_63" placeholder="Recommendations for Improvement" type="text"  {...register("sub_1_63")}/>
            </div>

            <div className="input-field col s12 center_it">
              <button
                className="btn-large  margin-bottom waves-effect waves-light pick_color"
                id="hide_icons"
                disabled={isSubmitting}
              >
                {isSubmitting ? <>submitting </> : <>submit </>}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default FleetForm;
