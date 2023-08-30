import { Controller, Get } from "@nestjs/common";
import { ProfileService } from "src/services/profile.service";

@Controller('profile')
export class ProfileController {

  constructor(private service: ProfileService) {}

  @Get()
  getProfile(){
      return this.service.profile();
  }

}