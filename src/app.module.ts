import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// 1. Generar un resource con la CLI de Nest
// 2. Mapear la Entity como @Schema() y definir @Prop(), que extienda de Document
// 3. Importar en el modulo de mi Recurso el Feature del modulo { name: Entity.name , schema: Schema}
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/[database_name]'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
