const SectionHeader = (props) => {
    return (
        <div id="sectionHeader" className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{props?.heading}</h1>
            {props.sub_heading ? <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{props?.sub_heading}</p> : ''}
        </div>
    );
};

export default SectionHeader;