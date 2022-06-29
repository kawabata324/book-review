function BaseInput(props) {
    const {label, type, register, required, errors, minLength, placeholder, defaultValue} = props

    return (
        <div>
            <label className="label text-xl">{label}</label>
            <input
                className="input input-bordered input-info w-96"
                type={type}
                {...register(label, {required, minLength})}
                defaultValue={defaultValue}
                placeholder={placeholder}
            />
            <div className="text-red-500">
                {errors?.type === "required" && `${label}を入力してください`}
                {errors?.type === "minLength" && `${label}が短すぎます。${minLength}文字以上にしてください`}
            </div>
        </div>
    )
}

export default BaseInput