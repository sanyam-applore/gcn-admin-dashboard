import React from 'react';
import styles from './style.module.css';
import { UserContext } from '../../SellerQuestionairre';
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';


const productInfo = [
    "Producer of raw materials",
    "Producer of components / semi-finished goods",
    "Producer of finished goods",
    "Distributor",
    "Retailer",
    "Service provider",
    "More than one business"
]

const BasicInformation = () => {
    const { user, setUser } = React.useContext(UserContext);
    console.log(user)
    if (!user) {
        return (
            <>Loading.....</>
        )
    }

    const productInfoComponent = productInfo.map((m, i) => {
        return (
            <div key={i}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={user.basicInformationAnswers.productInfo === m}
                            color="primary"
                            disabled={!(user.basicInformationAnswers.productInfo === m)}
                        />
                    }
                    label={m}
                />
                {m==="Producer of raw materials"}
            </div>
        )
    })

    return (
        <div className={styles.main}>
            <div className={styles.heading}>Basic Information</div>

            <div className={styles.header}>
                <span>1.1</span> Contact Details
                <hr className={styles.hr} />
            </div>

            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={user.basicInformationAnswers.initials === "Mr."}
                            color="primary"
                            disabled={!(user.basicInformationAnswers.initials === "Mr.")}
                        />
                    }
                    label="Mr."
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={user.basicInformationAnswers.initials === "Mrs."}
                            color="primary"
                            disabled={!(user.basicInformationAnswers.initials === "Mrs.")}
                        />
                    }
                    label="Mrs."
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={user.basicInformationAnswers.initials === "Ms."}
                            color="primary"
                            disabled={!(user.basicInformationAnswers.initials === "Ms.")}
                        />
                    }
                    label="Ms."
                />
            </div>

            <div className={styles.contactInfo}>
                <TextField
                    label="Name"
                    value={user.basicInformationAnswers.name}
                    variant="outlined"
                    disabled
                />
                <TextField
                    label="Job Title"
                    value={user.basicInformationAnswers.jobTitle}
                    variant="outlined"
                    disabled
                />
                <TextField
                    label="Organization Name"
                    value={user.basicInformationAnswers.organizationName}
                    variant="outlined"
                    disabled
                />
                <TextField
                    label="E Mail"
                    value={user.basicInformationAnswers.email}
                    variant="outlined"
                    disabled
                />
                <TextField
                    label="Phone Number"
                    value={user.basicInformationAnswers.mobile}
                    variant="outlined"
                    disabled
                />
            </div>

            <div className={styles.header}>
                <span>1.2</span> Please determine which business section your company belongs to and specify the activity. If your company has multiple businesses, please identify and specify them:
                <hr className={styles.hr} />
            </div>

            <div className={styles.productInfo}>
                {productInfoComponent}
            </div>

        </div>
    );
}

export default BasicInformation;