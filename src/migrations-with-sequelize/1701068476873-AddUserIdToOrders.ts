import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddUserIdToOrders1701068476873 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'Courses',
      new TableColumn({
        name: 'userId',
        isNullable: false,
        type: 'integer',
        default: 0,
      }),
    );

    await queryRunner.createForeignKey(
      'Courses',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'Users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(): Promise<void> {}
}
