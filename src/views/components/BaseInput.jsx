import "../../App.css"

function BaseInput(props) {
    const {label, type, register, required, errors, minLength} = props

    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                {...register(label, {required, minLength})}
            />
            <div className="error-text">
                {errors?.type === "required" && `${label}を入力してください`}
                {errors?.type === "minLength" && `${label}が短すぎます。${minLength}文字以上にしてください`}
            </div>
        </div>
    )
}

export default BaseInput