import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import talentMaterialService from "../../_services/talent-material-service";
import TalentMaterialService from "../../_services/talent-material-service";

const TalentMaterialList = ({ match }) => {
  const { path } = match;
  const [talentMaterials, setTalentMaterials] = useState([]);
  const [talentMaterialId, setTalentMaterialId] = useState("");
  const [requestData, setRequestData] = useState(new Date());

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const handleShowDeleteModal = (event) => {
    setTalentMaterialId(event.target.getAttribute("data-talent-material-id"));
    setShowDeleteModal(true);
  };

  useEffect(() => {
    getTalentMaterials();
  }, [requestData]);

  const getTalentMaterials = () => {
    TalentMaterialService.getAll()
      .then((response) => {
        setTalentMaterials(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTalentMaterial = () => {
    TalentMaterialService.destroy(talentMaterialId)
      .then((response) => {
        //setTalentMaterials(response.data);
        handleCloseDeleteModal();
        setRequestData(new Date());
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">All TalentMaterials</div>
        <div className="card-body">
          <Button href={`${path}/create`} variant="outline-primary">
            Create TalentMaterial
          </Button>
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Schedule</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {talentMaterials &&
                talentMaterials.map((talentMaterial) => (
                  <tr key={talentMaterial.id}>
                    <td>{talentMaterial.name}</td>
                    <td>{talentMaterial.schedule.name}</td>
                    <td>
                      <Button
                        href={`${path}/edit/${talentMaterial.id}`}
                        variant="dark"
                      >
                        Edit
                      </Button>
                      &nbsp;{" "}
                      <Button
                        data-talent-material-id={talentMaterial.id}
                        onClick={handleShowDeleteModal}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Talent Material</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteTalentMaterial}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TalentMaterialList;
