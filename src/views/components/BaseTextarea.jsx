function BaseTextarea(props) {
    const {label, register, required, errors, minLength, placeholder, defaultValue} = props

    return (
        <div>
            <label className="label text-xl">{label}</label>
            <textarea
                className="textarea textarea-primary h-96 w-96 "
                {...register(label, {required})}
                defaultValue={defaultValue}
            ></textarea>
            <div className="text-red-500">
                {errors?.type === "required" && `${label}を入力してください`}
                {errors?.type === "minLength" && `${label}が短すぎます。${minLength}文字以上にしてください`}
            </div>
        </div>
    )
}

export default BaseTextarea