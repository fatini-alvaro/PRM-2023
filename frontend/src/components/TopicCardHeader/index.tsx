import { Avatar, Typography } from "@mui/material";

import "./style.css";
import { IUser } from "../../@types";
import { FormattedDate, IntlProvider } from "react-intl";

type TopicCardHeaderProps = {
  createdAt: Date | undefined;
  owner: IUser | undefined
}

function TopicCardHeader({
  createdAt,
  owner
}: TopicCardHeaderProps) {
  return (
    <div id="topic-card-header">
      <Avatar alt={owner?.fullname}></Avatar>

      <div className="card-header-text">
        <Typography variant="h6">
          <b>{owner?.fullname}</b>
        </Typography>

        <Typography variant="caption">
          <IntlProvider locale="pt-BR">
            Criado em <FormattedDate value={createdAt} day='2-digit'
                                   month='2-digit' year='numeric'/>
          </IntlProvider>
        </Typography>
        
      </div>
    </div>
  );
}

export default TopicCardHeader;