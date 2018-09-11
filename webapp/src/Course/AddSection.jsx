import React from "react";

export default class AddSection extends React.Component {
    handleSubmit = (event) => {
        const data = new FormData(event.target);
        data.append("moduleId", "1");

        fetch("http://localhost:8080/section/add", {
            method: 'POST',
            body: data
        });
    };

    render() {
        return (
            <div id="addSectionDiv" className="w3-card">
                <form id="addSectionForm" onSubmit={this.handleSubmit}>
                    <label>Section Name</label>
                    <input name="sectionName" required type="text" placeholder="Enter section name"/>
                    <br/>
                    <label>Section content</label>
                    {/*TODO: Make the size bigger*/}
                    <input name="sectionContent" size="20" type="text" placeholder="Enter section content"/>
                    <br/>
                    <label>Upload video</label>
                    <input type="file"/>
                    <br/>
                    <label>Youtube link</label>
                    <input type="url" placeholder="Enter Youtube video URL"/>
                    <br/>
                    <input type="submit" value="Add Section"/>
                </form>
            </div>
        )
    }
}