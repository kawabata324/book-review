import "../../App.css"

function BaseInput(props) {
    const {label, type, register, required, errors} = props

    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                {...register(label, {required})}
            />
            <div className="error-text">
                {errors?.type === "required" && `${label}を入力してください`}
            </div>
        </div>
    )
}

export default BaseInput