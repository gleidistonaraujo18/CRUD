$(document).ready(function () {
  getDataTable();

  $("#form").submit(function (event) {
    event.preventDefault();
    var formData = $("#form").serialize();
    $.ajax({
      type: "POST",
      url: "http://localhost:7000/users",
      data: formData,
      success: function (response) {
        if (response.status === 200) {
          Swal.fire({
            title: "Dados inseridos!",
            text: response.msg,
            icon: "success",
          }).then(() => {
            location.reload();
          });
        } else {
          Swal.fire({
            title: "Erro!",
            text: response.msg,
            icon: "error",
          }).then(() => {
            location.reload();
          });
        }
      },
      error: function (error) {
        console.error("Erro ao salvar usuário:", error);
      },
    });
  });

  $("#formEdit").submit(function (event) {
    let id = $("#id").val();
    event.preventDefault();
    var formData = $("#formEdit").serialize();
    $.ajax({
      type: "PUT",
      url: "http://localhost:7000/users/" + id,
      data: formData,
      success: function (response) {
        if (response.status === 200) {
          Swal.fire({
            title: "Dados Atualizados!",
            text: response.msg,
            icon: "success",
          }).then(() => {
            location.reload();
          });
        } else {
          Swal.fire({
            title: "Erro!",
            text: response.msg,
            icon: "error",
          }).then(() => {
            location.reload();
          });
        }
      },
      error: function (error) {
        console.error("Erro ao salvar usuário:", error);
      },
    });
  });
});

function getDataTable() {
  $("#users").dataTable({
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.10.11/i18n/Portuguese-Brasil.json",
    },
    destroy: true,
    responsive: true,
    paging: false,
    lengthChange: false,
    searching: false,
    ordering: false,
    info: false,
    autoWidth: true,
    processing: false,
    ajax: {
      url: "http://localhost:7000/users",
      type: "GET",
      dataType: "json",
      dataSrc: "",
    },

    columns: [
      {
        data: function (data) {
          return data["id"];
        },
      },
      {
        data: function (data) {
          return data["name"];
        },
      },
      {
        data: function (data) {
          return data["email"];
        },
      },
      {
        data: function (data) {
          return data["UF"];
        },
      },
      {
        data: function (data) {
          let id = parseInt(data["id"]);
          let editUser =
            "<button class='btn btn-secondary' onclick='modalEditUser(" +
            id +
            ")' data-bs-toggle='modal' data-bs-target='#modalEditUser'>Editar</button>";
          let deleteUser =
            "<button class='btn btn-danger' onclick='modalDeleteUser(" +
            id +
            ")'>Deletar</button>";
          return editUser + " " + deleteUser;
        },
      },
    ],
  });
}

function modalEditUser(id) {
  $("#id").val(id);
  $.ajax({
    type: "GET",
    url: "http://localhost:7000/users/" + id,
    success: function (response) {
      if (response.status === 200) {
        $("#name").val(response.users.name);
        $("#email").val(response.users.email);
        $("#uf").val(response.users.UF);
      } else {
        Swal.fire({
          title: "Erro!",
          text: response.msg,
          icon: "error",
        }).then(() => {
          location.reload();
        });
      }
    },
    error: function (error) {
      console.error("Erro ao buscar usuário:", error);
    },
  });
}

function modalDeleteUser(id) {
  Swal.fire({
    title: "Deseja deletar este usuário?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: "DELETE",
        url: "http://localhost:7000/users/" + id,
        success: function (response) {
          if (response.status === 200) {
            Swal.fire({
              title: "Usuário deletado!",
              text: response.msg,
              icon: "success",
            }).then(() => {
              location.reload();
            });
          } else {
            Swal.fire({
              title: "Erro!",
              text: response.msg,
              icon: "error",
            }).then(() => {
              location.reload();
            });
          }
        },
        error: function (error) {
          console.error("Erro ao buscar usuário:", error);
        },
      });
    }
  });
}
