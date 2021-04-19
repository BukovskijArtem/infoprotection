<template>
  <div>
    <el-menu default-active="1" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Main</el-menu-item>
      <el-menu-item index="2">About</el-menu-item>
    </el-menu>
    <div class="wrapper">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="ФИО"
          prop="fullName"
          sortable>
        </el-table-column>
        <el-table-column
          label="Должность"
          prop="position"
          sortable>
        </el-table-column>
        <el-table-column
          label="Подразделение"
          prop="subdivision"
          sortable>
        </el-table-column>
        <el-table-column
          label="E-mail"
          prop="email">
        </el-table-column>
        <el-table-column
          label="Телефон"
          prop="phone">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <div class="header-table">
              <el-input
                v-model="search"
                size="mini"
                placeholder="Поиск"/>
              <el-button type="success" icon="el-icon-plus" size="mini" circle @click="addUser(scope)"/>
            </div>
          </template>
          <template slot-scope="scope">
            <el-button
              icon="el-icon-edit"
              size="mini"
              @click="editUser(scope.row)"/>
            <el-button
              icon="el-icon-delete"
              size="mini"
              type="danger"
              @click="deleteUser(scope.row)"/>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination" v-if="total > 10">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :page-size="pageSize"
          :total="total">
        </el-pagination>
      </div>

      <el-dialog title="Пользователь" :visible.sync="dialogVisible" v-if="dialogVisible" width="90%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <el-form-item label="ФИО" prop="fullName">
            <el-input v-model="ruleForm.fullName"></el-input>
          </el-form-item>
          <el-form-item label="Должность" prop="position">
            <el-select v-model="ruleForm.position" placeholder="Выберите должность">
              <el-option
                v-for="item in optionsPosition"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Подразделение" prop="subdivision">
            <el-select v-model="ruleForm.subdivision" placeholder="Выберите подразделение">
              <el-option
                v-for="item in optionsSubdivision"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="E-mail" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Телефон" prop="phone">
            <el-input v-mask="'# (###) ###-####'" v-model="ruleForm.phone"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Отмена</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">Сохранить</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped>
.el-select {
  width: 100%;
}
</style>

<script>
export default {
  name: 'Main',
  data () {
    return {
      total: 0,
      page: 1,
      pageSize: 10,
      isEdit: false,
      ruleForm: {
        fullName: '',
        position: '',
        subdivision: '',
        email: '',
        phone: ''
      },
      rules: {
        fullName: [
          { required: true, message: 'Пожалуйста, введите ФИО', trigger: 'blur' }
        ],
        position: [
          { required: true, message: 'Пожалуйста, выберите должность', trigger: 'change' }
        ],
        subdivision: [
          { required: true, message: 'Пожалуйста, выберите подразделение', trigger: 'change' }
        ],
        email: [
          { required: true, message: 'Пожалуйста, введите e-mail', trigger: 'blur' },
          { type: 'email', message: 'Пожалуйста, введите правильный адрес электронной почты', trigger: ['blur', 'change'] }
        ],
        phone: [
          { required: true, message: 'Пожалуйста, введите номер телефона', trigger: 'blur' }
        ]
      },
      search: '',
      dialogVisible: false
    }
  },
  methods: {
    handleSelect(key) {
      if (key === '2') {
        this.$router.push('about')
      }
    },
    handleCurrentChange(val) {
        this.page = val
    },
    addUser () {
      this.isEdit = false
      this.dialogVisible = true
      this.ruleForm = {
        fullName: '',
        position: '',
        subdivision: '',
        email: '',
        phone: ''
      }
    },
    editUser(row) {
      this.isEdit = true
      this.ruleForm = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
    },
    deleteUser(row) {
      this.$store.dispatch('users/DELETE_TABLE_DATA', row.id)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isEdit) {
            this.$store.dispatch('users/PUT_TABLE_DATA', this.ruleForm)
          } else {
            this.$store.dispatch('users/POST_TABLE_DATA', this.ruleForm)
          }
          this.dialogVisible = false
          this.$store.dispatch('users/GET_TABLE_DATA')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  computed: {
    optionsSubdivision () {
      return this.$store.getters['Directory/SUBDIVISION']
    },
    optionsPosition () {
      return this.$store.getters['Directory/POSITION']
    },
    tableData () {
      let copy = JSON.parse(JSON.stringify(this.$store.getters['users/TABLE_DATA']))
      if (this.search.length > 0) {
        copy = copy.filter((el) => {
          return el.fullName.toLowerCase().includes(this.search.toLowerCase()) || el.email.includes(this.search) || el.phone.includes(this.search) || el.subdivision.includes(this.search) || el.position.includes(this.search)
        })
      }
      this.total = copy.length
      if (this.total > 10) {
        return copy.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
      } else {
        return copy
      }
    }
  },
  mounted () {
    this.$store.dispatch('users/GET_TABLE_DATA')
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  margin: 50px;
  .header-table {
    display: flex;
    .el-input--mini {
      margin-right: 10px;
    }
  }
  @media (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  .pagination {
    text-align: center;
    padding-top: 30px;
  }
}
</style>