import BaseInput from "./BaseInput";
import {Link} from "react-router-dom";

function AccountForm(props) {
    const {
        formTitle,
        serverError,
        errors,
        handleSubmit,
        submitFunc,
        submitValue,
        register,
        linkMessage,
        existName,
        link
    } = props

    const inputName = (
        <BaseInput
            label="name"
            type="text"
            register={register}
            required
            errors={errors.name}
        />
    )

    return (
        <div className="container mt-10">
            <h1 className="text-4xl text-center">{formTitle}</h1>
            <div className="text-red-600 text-center my-5">{serverError}</div>
            <div>
                <form className="flex flex-col items-center gap-5 my-8" onSubmit={handleSubmit(submitFunc)}>
                    {existName ? inputName : ""}
                    <BaseInput
                        label="email"
                        type="email"
                        register={register}
                        errors={errors.email}
                        required
                    />
                    <BaseInput
                        label="password"
                        type="password"
                        register={register}
                        errors={errors.password}
                        minLength={6}
                        required
                    />
                    <input className="btn btn-primary" type="submit" value={submitValue}/>
                    <Link className="link link-primary text-center" to={link}>{linkMessage}</Link>
                </form>
            </div>
        </div>
    )
}

export default AccountForm
