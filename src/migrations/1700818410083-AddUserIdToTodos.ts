import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddUserIdToTodos1700818410083 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'Todos',
      new TableColumn({
        name: 'userId',
        isNullable: false,
        type: 'integer',
        default: 0,
      }),
    );
    await queryRunner.createForeignKey(
      'Todos',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'Users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
