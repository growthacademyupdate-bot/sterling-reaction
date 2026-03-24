actor {
  type Metadata = {
    title : Text;
    tagline : Text;
  };

  let metadata : Metadata = {
    title = "Sterling Reaction";
    tagline = "Reactions worth watching";
  };

  public query func getMetadata() : async Metadata {
    metadata;
  };
};
