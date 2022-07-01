import BaseInput from "./BaseInput";
import BaseTextarea from "./BaseTextarea";

function BaseBookForm(props) {
    const {formTitle, errors, handleSubmit, submitFunc, submitValue, register, deleteFunc, deleteBtn} = props

    const deleteButton = () => {
        return (
            <button className="btn btn-error btn-md" onClick={() => deleteFunc}>削除</button>
        )
    }

    return (
        <div className="container mt-10">
            <h1 className="text-4xl text-center">{formTitle}</h1>
            <form className="flex flex-col items-center gap-5 my-8" onSubmit={handleSubmit(submitFunc)}>
                <BaseInput
                    label="title"
                    type="text"
                    register={register}
                    errors={errors.title}
                    required
                />
                <BaseInput
                    label="url"
                    type="text"
                    register={register}
                    errors={errors.url}
                    required
                />
                <BaseTextarea
                    label="detail"
                    register={register}
                    errors={errors.detail}
                    required
                />
                <BaseTextarea
                    label="review"
                    register={register}
                    errors={errors.review}
                    required
                />
                <div className="flex flex-row-reverse justify-between w-80">
                    <input className="btn btn-info btn-md" type="submit" value={submitValue} />
                    {deleteBtn ? deleteButton() : ''}
                </div>
            </form>
        </div>
    )
}

export default BaseBookForm