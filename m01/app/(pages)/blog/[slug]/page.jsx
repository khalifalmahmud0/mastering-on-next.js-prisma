let Page = ({ params }) => {
    console.log(params);
    return (
        <div>
            <h1>Category: {params.slug} </h1>
        </div>
    );
}
export default Page;
